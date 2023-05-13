import { ProductFormComponent } from './../components/product-form/product-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanLeaveEditGuard } from 'src/guards/candeactive.guard';
import { HomeComponent } from 'src/components/home/home.component';

@NgModule({
  declarations: [AppComponent, ProductFormComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
