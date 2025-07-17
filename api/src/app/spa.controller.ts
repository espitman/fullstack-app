import { Controller, Get, Req, Res, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { join } from 'path';
import type { Request, Response } from 'express';
import { existsSync } from 'fs';
import type { Cache } from '@nestjs/cache-manager';

// Simple bot detection regex
const botUserAgentRegex = /bot|crawl|slurp|spider|mediapartners|google|bing|yandex|baidu|duckduckbot|facebot|twitterbot|applebot|petalbot/i;

@Controller()
export class SpaController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  
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
      const cacheKey = `ssr:${req.originalUrl}`;
      let html = await this.cacheManager.get<string>(cacheKey);
      if (!html) {
        try {
          const puppeteer = await import('puppeteer');
          const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
          const page = await browser.newPage();
          // Dynamically determine the base URL from the request
          const protocol = req.protocol || (req.headers['x-forwarded-proto'] as string) || 'http';
          const host = req.get('host');
          const fullUrl = `${protocol}://${host}${req.originalUrl}`;
          await page.goto(fullUrl, { waitUntil: 'networkidle0' });
          html = await page.content();
          await browser.close();
          if (html && html.includes('<html')) {
            await this.cacheManager.set(cacheKey, html, 60 * 5 * 1000); // cache for 5 minutes
          }
        } catch (err) {
          console.error('Puppeteer SSR error:', err);
          return res.status(500).send('SSR error');
        }
      }
      if (html) {
        return res.send(html);
      } else {
        return res.status(500).send('SSR error');
      }
    }
    // Fallback: serve static index.html for normal users
    return res.sendFile(join(__dirname, '../../client/dist/index.html'));
  }
} 