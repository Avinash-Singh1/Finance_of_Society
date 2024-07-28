import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-paymentproofform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers:[DataService],

  templateUrl: './paymentproofform.component.html',
  styleUrl: './paymentproofform.component.css',
})
export class PaymentproofformComponent {
  // constructor(private http: HttpClient) {}
  constructor(private http: HttpClient,private imageService:DataService) {}

  name: any;

  getData(val: any) {
    
    console.log('val:', val);
    // val['images'] =  this.drugLicenseEncodedImage[0];
    // console.log('drugLicenseEncodedImage:', this.drugLicenseEncodedImage);
    this.http.post('/api/postpaymentdetails', val).subscribe((x) => {
      console.log('X: ', x);
    });
  }

  // onDrugLicenseImageChange(val:any)
  // {
  //   console.log('val:', val);
  // }
  

  drugLicenseImagesChosen: number = 0; // Number of drug license images uploaded (only 1 allowed)
  drugLicenseImage!: File; // File containing the uploaded drug license image
  drugLicenseEncodedImage: string[] = []; // Encoded strings for uploaded drug license images.



  // ------------------onDrugLicenseImageChange--------------------
  onDrugLicenseImageChange(event: Event) {
    console.log("Event:",event);
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) this.drugLicenseImagesChosen = files.length;

    // File count validation: Only one image allowed
    if (this.drugLicenseImagesChosen > 1) {
      // this.snackbarService.showError('Only 1 drug license image can be uploaded');
      this.drugLicenseImagesChosen = 0;
      return;
    }

    // File extenstion validation: Only JPG, JPEG and PNG files allowed
    if (!this.isValidFileExtension(files!, ['jpg', 'jpeg', 'png'])) {
      // this.snackbarService.showError('Only JPG, JPEG or PNG files can be uploaded');
      this.drugLicenseImagesChosen = 0;
      return;
    }

    this.drugLicenseImage = files![0];

    // Encode the image to base64 for displaying it on the UI
    this
      .encodeImages(target)
      .then((encodedImages: string[]) => (this.drugLicenseEncodedImage = encodedImages))
      .catch((error: any) => {
        console.log('Error:', error);
        // this.snackbarService.showError('Unable to display drug license image');
      });

      console.log("Event end:",event);

  }  // ------------------onDrugLicenseImageChange--------------------
  


  isValidFileExtension(files: FileList, allowedExtension: string[]): boolean {
    for (let i = 0; i < files?.length; i++) {
      const fileName = files?.item(i)?.name;
      const fileExtension = fileName?.split('.').pop();
      if (!allowedExtension.includes(fileExtension!)) return false;
    }

    return true;
  }


  // ----------------encode image --------------
  // ----------------------------------------------
  encodeImages(target: HTMLInputElement): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const encodedImages: string[] = [];
      const files = target.files;

      if (!files) {
        reject('No files selected.');
        return;
      }

      let processedCount = 0;

      for (let i = 0; i < files.length; i++) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          encodedImages.push(fileReader.result?.toString().split(';base64,').pop() as string); // Extract everything that comes after 'base64,'
          processedCount++;
          if (processedCount === files.length) resolve(encodedImages);
        };
        fileReader.onerror = () => reject('Error reading file.');
        fileReader.readAsDataURL(files[i]);
      }
    });
  }


}
