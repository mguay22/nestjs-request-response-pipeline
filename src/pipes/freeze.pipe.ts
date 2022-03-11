import { Injectable, Logger, PipeTransform } from '@nestjs/common';

@Injectable()
export class FreezePipe implements PipeTransform {
  private readonly logger = new Logger(FreezePipe.name);

  transform(value: any) {
    this.logger.debug('FreezePipe running...');
    Object.freeze(value);
    return value;
  }
}
