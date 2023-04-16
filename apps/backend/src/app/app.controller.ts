import { Controller, Get } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('test')
  getTestData() {
    return { test: this.configService.get('TEST') };
  }
}