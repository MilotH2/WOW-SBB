import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { CompleteServiceService } from '../services/complete-service.service';
import {AutoCompleteService} from 'ionic4-auto-complete';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  isLoading = false;
  toggleStatus = false;
  myForm: FormGroup;
  imagesFromApi: any;
  tagId = 0;
  className = 'default';

   constructor(
     public navCtrl: NavController, 
     public completeTestService: CompleteServiceService,
     public http: HttpClient,
     public nav: NavController,
     public toastCtrl: ToastController,
     public loadingCtrl: LoadingController
     ) {
   
   }
 
   ngOnInit(): void {
     this.myForm = new FormGroup({
       origin: new FormControl('', [
         Validators.required
       ]),
       tag: new FormControl('', [
         Validators.required
        ]),
        time: new FormControl('', [
          Validators.required
        ]),
        date: new FormControl('', [
          Validators.required
        ]),
        timeToSpent: new FormControl('', [
          Validators.required
        ])
     });
   }

   ionViewWillEnter(){
     this.getTags();
   }
  
 
   submit(): void {
    //  if (!this.myForm.valid){
    //    return
    //  }

     let submitParams = {
       tag: this.tagId,
       origin: this.myForm.value.origin,
       time: this.myForm.value.time,
       hours: this.myForm.value.timeToSpent,
       minutes: this.toggleStatus,
       date: this.myForm.value.date
    };

     console.log(submitParams);
     this.presentLoadingController('Looking for amazing places, please wait...');
     this.completeTestService.postFormtoAPI(submitParams).subscribe(data => {
      const datax = JSON.parse(data);
      this.dismissLoadingController();
      console.log(datax);
      if (datax === 0) {
        this.presentToast('Nothing found, please try again!');
      } else {
        let navigationExtras: NavigationExtras = {
          state: {
            parsedData: datax
          }
        };
        this.nav.navigateForward(['results-list'], navigationExtras);
      }
      
    });
   }



   async presentLoadingController(message: string) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
        // duration: 5000,
        message
    }).then(a => {
        a.present().then(() => {
            if (!this.isLoading) {
                a.dismiss().then(() => console.log('abort presenting')).catch(() => {});
            }
        });
      });
    }

    async dismissLoadingController() {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(() => console.log('dismissed')).catch(() => {});
    }

   async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

   ionChange(ev: any){
     console.log(ev);
     this.toggleStatus = ev.detail.checked;
     console.log(this.toggleStatus);
   }

   getTags(){
    this.completeTestService.getTagsfromApi().subscribe(data => {
      console.log(data);
      this.imagesFromApi = data;
    });
   }

   selectTag(id){
     this.tagId = id;
     console.log(this.tagId);
     this.className = 'selectedItem';
   }

   
  
}
