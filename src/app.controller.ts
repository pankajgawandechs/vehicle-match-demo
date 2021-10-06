import { Get, Controller, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  async root() {
    const result = await this.appService.getVehicleTypes();
    return { message: 'Matched car id.', vehicleTypes: result.data };
  }

  @Get('get-cars')
  async getCars(@Req() request: Request) {
    try {
      const res = await this.appService.getCars(request.query);
      if (res.data != undefined && res.data.length > 0) {
        return {
          success: true,
          message: '',
          result: res.data,
        };
      } else {
        return {
          success: false,
          message: 'No cars for this vehicle type found.',
          result: res,
        };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
