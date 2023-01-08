import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from './button/button.component';
import { BrandComponent } from './brand/brand.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    BrandComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    BrandComponent
  ]
})
export class SharedModule { }
