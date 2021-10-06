import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  async root() {
    const result = await this.appService.getVehicles();
    return { message: 'Matched car id.', matchedData: result.data };
  }
}
