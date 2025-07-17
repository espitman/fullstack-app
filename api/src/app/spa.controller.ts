import { Controller, Get, Req, Res } from '@nestjs/common';
import { join } from 'path';
import type { Request, Response } from 'express';
import { existsSync } from 'fs';

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
    // Here you can add bot detection and Puppeteer SSR if needed
    return res.sendFile(join(__dirname, '../../client/dist/index.html'));
  }
} 