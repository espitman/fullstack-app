import { Controller, Get, Req, Res } from '@nestjs/common';
import { join } from 'path';
import type { Request, Response } from 'express';
import { existsSync } from 'fs';

// Simple bot detection regex
const botUserAgentRegex = /bot|crawl|slurp|spider|mediapartners|google|bing|yandex|baidu|duckduckbot|facebot|twitterbot|applebot|petalbot/i;

@Controller()
export class SpaController {
  @Get('*')
  async serveSpa(@Req() req: Request, @Res() res: Response) {
    // Serve /assets files directly if requested
    if (req.url.startsWith('/assets')) {
      const assetPath = join(__dirname, '../../client/dist', req.url);
      if (existsSync(assetPath)) {
        return res.sendFile(assetPath);
      } else {
        return res.status(404).send('Not Found');
      }
    }
    if (req.url.startsWith('/api')) {
      return res.status(404).send('Not Found');
    }
    // Bot detection and dynamic rendering
    const userAgent = req.headers['user-agent'] || '';
    const isBot = botUserAgentRegex.test(userAgent);
    if (isBot) {
      try {
        const puppeteer = await import('puppeteer');
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.goto(`http://localhost:${process.env.PORT || 3000}${req.originalUrl}`, { waitUntil: 'networkidle0' });
        const html = await page.content();
        await browser.close();
        return res.send(html);
      } catch (err) {
        console.error('Puppeteer SSR error:', err);
        return res.status(500).send('SSR error');
      }
    }
    // Fallback: serve static index.html for normal users
    return res.sendFile(join(__dirname, '../../client/dist/index.html'));
  }
} 