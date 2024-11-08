import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UsersPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    // if 3  then parseInt(value) will be 3   and value is 3
    // if 3a then parseInt(value) will be 3   and value is 3a
    // if a  then parseInt(value) will be NaN and value is a

    if (parseInt(value).toString() !== value) {
      throw new HttpException('Invalid Data Type', HttpStatus.BAD_REQUEST);
    }

    return value;
  }
}