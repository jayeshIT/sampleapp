import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    TranslateModule,
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
