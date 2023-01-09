import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from './button/button.component';
import { BrandComponent } from './brand/brand.component';
import { ButtonBackComponent } from './back/back.component';
import { OrnamentComponent } from './ornament/ornament.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    BrandComponent,
    ButtonBackComponent,
    OrnamentComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    BrandComponent,
    ButtonBackComponent,
    OrnamentComponent
  ]
})
export class SharedModule { }
