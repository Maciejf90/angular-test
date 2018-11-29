import { Pipe, PipeTransform, Inject } from '@angular/core';
import { IMAGES_BASE_URL } from '../tokens';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  constructor(@Inject(IMAGES_BASE_URL) private imagesBaseUrl) {

  }
  transform(value: any, customBaseUrl?: any, customArg?: any): any {
    // console.log('transform image url', value, customBaseUrl, customArg);
    if (customBaseUrl) {
      return customBaseUrl + value;
    } else {
      return this.imagesBaseUrl + value;

    }
  }

}
