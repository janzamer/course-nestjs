import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);
    const anionumber = parseInt(value.age.toString(), 10);
    if(isNaN(anionumber)){
      throw new HttpException('La edad debe ser un numero', HttpStatus.BAD_REQUEST);
    }

    return {...value, age: anionumber};
  }
}
