import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { from } from 'rxjs';
import { NavController, PopoverController } from '@ionic/angular';
import { BookPopoverFormComponent } from '../book-popover-form/book-popover-form.component';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.page.html',
  styleUrls: ['./results-list.page.scss'],
})
export class ResultsListPage implements OnInit {

  dataArray: any = {};
  dataList: any = [];
  surpriseName: any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private nav: NavController,
    private popoverCtrl: PopoverController
    ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dataList = this.router.getCurrentNavigation().extras.state.parsedData;
        console.log(this.dataList);
       
      }
    });
  }

  ngOnInit() {
  }

  selectedFromList(selectedFromListData, userInputDetailsFromPopover) {
    console.log('selectedFromListData', selectedFromListData);
    let navigationExtras: NavigationExtras = {
      state: {
        selectedData: selectedFromListData,
        userInputDetailsFromPopover
      }
    };
    this.nav.navigateForward(['selected-data'], navigationExtras);
  }

  async presentPopover(selectedFromListData, ev?: any) {
    console.log('onPopover', selectedFromListData);
    const popover = await this.popoverCtrl.create({
      component: BookPopoverFormComponent,
      event: ev,
      mode: 'md',
      translucent: true,
      cssClass: 'pop-over-style'
    });

    popover.onDidDismiss().then(data => {
      console.log(data);
      if (data.role === 'backdrop') {

      } else {
        this.selectedFromList(selectedFromListData, data.data);
      }
    });
    return await popover.present();
  }

}
