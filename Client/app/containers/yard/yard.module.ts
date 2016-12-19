import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { BaseSharedModule } from 'app';
import {
  PagingComponent,
  TopicFilterComponent,
  TopicScrollerComponent,
  TorrentCardComponent,
  TorrentListComponent,
  UserInfoComponent
} from 'app-components';
import {
  DetailComponent,
  IndexComponent,
  PublishComponent,
  TorrentComponent,
  YardComponent
} from 'app-containers';
import {
  PublishService
} from 'app-services';

import { ROUTES } from './yard-routes';

const MODULES = [
  BaseSharedModule,
  RouterModule.forChild(ROUTES),
];
const COMPONENTS = [
  PagingComponent,
  TopicFilterComponent,
  TopicScrollerComponent,
  TorrentCardComponent,
  TorrentListComponent,
  DetailComponent,
  IndexComponent,
  PublishComponent,
  TorrentComponent,
  YardComponent
];
const SERVICES = [
  PublishService
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
    ...SERVICES
  ]
})
export class YardModule { }
