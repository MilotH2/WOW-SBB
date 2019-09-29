import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultsListPage } from './results-list.page';
import { BookPopoverFormComponent } from '../book-popover-form/book-popover-form.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultsListPage,
    BookPopoverFormComponent
  ],
  entryComponents: [
    BookPopoverFormComponent
  ]
})
export class ResultsListPageModule {}
