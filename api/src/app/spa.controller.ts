import { Controller, Get, Req, Res } from '@nestjs/common';
import { type Request, type Response } from 'express';
import { join } from 'path';

@Controller()
export class SpaController {
  @Get('*')
  serveSpa(@Req() req: Request, @Res() res: Response) {
    // Only handle non-API routes
    if (req.url.startsWith('/api')) {
      return res.status(404).send('Not Found');
    }
    res.sendFile(join(__dirname, '../../client/dist/index.html'));
  }
} 