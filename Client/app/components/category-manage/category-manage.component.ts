import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from 'app-reducers';
import { apiAction } from 'app-actions';
import { Category } from 'app-models';
import { AppClientService } from 'app-services';
@Component({
  selector: 'admin-category-manage',
  templateUrl: './category-manage.component.html',
  styleUrls: ['./category-manage.component.scss']
})
export class CategoryManageComponent implements OnInit {

  temp: { orderId: number, name: string };
  state: number = 0;

  items$: Observable<Array<Category>>;
  isBusy$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
    private app: AppClientService
  ) {
    this.items$ = app.categories$;
    this.isBusy$ = store.let(fromRoot.getRequestBusying);
  }


  reset() {
    this.temp = null;
    this.state = 0;
  }
  add() {
    this.temp = { orderId: 0, name: '' };
    this.state = 1;
  }
  submit(c: Category) {
    if (this.state === 1) { // add
      this.store.dispatch(new apiAction.PostCategoryAction(this.temp));
      return this.reset();
    }
  }


  get canSave(): boolean {
    if (this.temp.orderId === 0
      || this.temp.name.length <= 2) {
      return false;
    }
    return true;
  }
  get canSave$(): Observable<boolean> {
    return this.items$.map(v => v.filter(v => v.orderId === this.temp.orderId || v.name === this.temp.name).length > 0)
  }

  ngOnInit() {
  }

}
