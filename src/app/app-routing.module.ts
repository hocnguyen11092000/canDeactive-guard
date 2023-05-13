import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductFormComponent } from 'src/components/product-form/product-form.component';
import { CanLeaveEditGuard } from 'src/guards/candeactive.guard';
import { HomeComponent } from 'src/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductFormComponent,
    canDeactivate: [CanLeaveEditGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
