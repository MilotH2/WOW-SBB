import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-book-popover-form',
  templateUrl: './book-popover-form.component.html',
  styleUrls: ['./book-popover-form.component.scss'],
})
export class BookPopoverFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      bookEmail: new FormControl('', {
          updateOn: 'blur',
          // validators: [Validators.required, Validators.email]
      }),
      fullName: new FormControl('', {
          updateOn: 'blur',
          // validators: [Validators.required]
      }),
    });
  }

  onBookClick(){
    if (!this.bookForm.valid) {
      return;
    }

    const bookParams = {
        fullName: this.bookForm.value.fullName,
        email: this.bookForm.value.bookEmail
    };

    console.log(bookParams);
    this.popoverCtrl.dismiss(bookParams);
  }
}
