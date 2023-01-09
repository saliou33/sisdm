import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]

})
export class LoginModule { }
