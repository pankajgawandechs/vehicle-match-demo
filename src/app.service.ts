import { Injectable } from '@nestjs/common';
import { constant } from './config/constant';

@Injectable()
export class AppService {
  /**
   *
   * @returns matched: []
   */
  getVehicles(): any {
    try {
      //We can take vehicle data from database or whatever the source
      const vehicles = constant.VEHICLES;
      const matched = [];
      vehicles.map((vehicle) => {
        const match = this.checkMatch(vehicle.model);
        if (match) {
          matched.push(match);
        }
      });
      return { data: matched };
    } catch (error) {
      console.log('error');
    }
  }

  /**
   *
   * @param model
   * @returns carId
   * @description To match model and vehical type name we have remove space and make it lowercase from words.
   */
  checkMatch(model: string): any {
    const modalString = model.replace(/ /g, '').toLocaleLowerCase();
    const vehicleTypes = constant.VEHICLE_TYPES;
    let carId: number;
    vehicleTypes.filter((vehicle) => {
      const vehicleModalString = vehicle.typeName
        .replace(/ /g, '')
        .toLocaleLowerCase();
      //By which fields we want to match can be change here.
      if (vehicleModalString === modalString) {
        carId = vehicle.carId;
      }
      return carId;
    });
    return carId;
  }
}
