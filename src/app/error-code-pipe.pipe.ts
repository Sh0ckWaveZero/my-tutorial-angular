import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorCodePipe'
})
export class ErrorCodePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] === 'TH') {
      if (value === '001') { return 'ไม่ได้ต่อเน็ต'; }
      if (value === '002') { return 'พื้นที่เต็ม'; }
    } else if (args[0] === 'EN') {
      if (value === '001') { return 'No Internet Connection'; }
      if (value === '002') { return 'No Diskspace'; }
    }
    return value;
  }

}
