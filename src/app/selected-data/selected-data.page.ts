import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-selected-data',
  templateUrl: './selected-data.page.html',
  styleUrls: ['./selected-data.page.scss'],
})
export class SelectedDataPage implements OnInit {

  selectedDataFromList: any = [];
  userInputFromPopover: any;

  constructor(private route: ActivatedRoute, private router: Router, private nav: NavController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedDataFromList = this.router.getCurrentNavigation().extras.state.selectedData;
        this.userInputFromPopover = this.router.getCurrentNavigation().extras.state.userInputDetailsFromPopover;
        console.log('onSelected data page: ', this.selectedDataFromList);
        console.log('userInput: ', this.userInputFromPopover);
      }
    });
  }

  ngOnInit() {
  }

}
