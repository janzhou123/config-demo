import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get('config')
  getConfig(): any {
    const config = {
      dbType: this.configService.get('DB_TYPE'),
      dbName: this.configService.get('DB_NAME'),
      dbUrl: this.configService.get('DB_URL'),
      dbUser: this.configService.get('DB_USER'),
      dbPwd: this.configService.get('DB_PWD'),
    };
    return config;
  }
}
