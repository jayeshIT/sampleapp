import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

const routes: Routes = [{
  path: '',
  component: OrderlistComponent,
  pathMatch: 'full'
}, {
  path: 'orderlist',
  component: OrderlistComponent,
}, {

  path: 'orderdetails/:id',
  component: OrderdetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
