import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback } from './shared/feedback';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  @ViewChild('fform') feedbackFormDirective;
  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    }, 
    'password': {
      'required':      'Password number is required.',
      'pattern':       'Password number must contain uppercase,number and capital leters.'
    },
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.feedbackForm = this.fb.group({
     
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
   this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
   this.onValueChanged(); //reset form validation messages
  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      email:  ['', [Validators.required, Validators.email] ],
      password:['', [Validators.required, Validators.pattern]]
     
    });
    this.feedbackFormDirective.resetForm();
  }

  

}
