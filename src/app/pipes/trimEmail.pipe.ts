import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimEmail'
})
export class TrimEmailPipe implements PipeTransform {

  transform(email: string, maxLength: number = 10): string {
    // Check if description is null or undefined
    if (!email) {
      return '';
    }

    // Trim the description and add ellipsis (...) if it exceeds maxLength
    return email.length > maxLength ? `${email.slice(0, maxLength)}...` : email;
  }

}
