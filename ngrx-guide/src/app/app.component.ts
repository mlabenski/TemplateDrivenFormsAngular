import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formContent = {
    email: '',
    secret: '',
    password: ''
  };
  @ViewChild('f') signupForm: NgForm;
  title = 'ngrx-guide';
  defaultQuestion = 'advanced';
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.formContent.email = this.signupForm.value.userData.email;
    this.formContent.secret = this.signupForm.value.userData.secret;
    this.formContent.password = this.signupForm.value.userData.password;
  }
}
