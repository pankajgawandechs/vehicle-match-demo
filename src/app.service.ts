import { Injectable } from '@nestjs/common';
import { constant } from './config/constant';

@Injectable()
export class AppService {
  /**
   *
   * @returns matched: []
   */
  getVehicleTypes(): any {
    try {
      //We can take vehicle data from database or whatever the source
      const vehicleTypes = constant.VEHICLE_TYPES;
      return { data: vehicleTypes };
    } catch (error) {
      console.log('error');
    }
  }

  /**
   *
   * @returns matched: []
   */
  async getCars(params): Promise<any> {
    try {
      //We can take vehicle data from database or whatever the source
      const matched = await this.checkMatch(params.typeName);
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
  checkMatch(typeName: string): any {
    try {
      const vehicles = constant.VEHICLES;
      if (typeName != '') {
        const typeNameString = typeName.replace(/ /g, '').toLocaleLowerCase();
        const results = [];
        vehicles.filter((vehicle) => {
          const vehicleModalString = vehicle.model
            .replace(/ /g, '')
            .toLocaleLowerCase();
          //By which fields we want to match can be change here.
          if (vehicleModalString === typeNameString) {
            results.push(vehicle);
          }
          return results;
        });
        return results;
      } else {
        return vehicles;
      }
    } catch (error) {
      console.log('error');
    }
  }
}
