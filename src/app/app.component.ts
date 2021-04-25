import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import "bootstrap/dist/css/bootstrap.css"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signupForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  Password: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = fb.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*"),Validators.minLength(5) ]],
      lname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*"),Validators.minLength(5) ]],
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      address: this.fb.group({
        address1: ['', [Validators.required, Validators.minLength(5)]],
        address2: ['', [Validators.required, Validators.minLength(5)]],
        state: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*"), Validators.minLength(3)]],
        zip: ['', [Validators.required, Validators.pattern("^[0-9]{6}")]]


      })
    });

  }


  PostData() {
    // this.http.post('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'foo',
    //     body: this.signupForm.value,
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .subscribe(res => {
    //     console.log(res);
    //   })
    // // this.FirstName= signupForm.controls.fname.value;
    // this.LastName= signupForm.controls.lname.value;
    // this.Email= signupForm.controls.EmailId.value;
    // this.Password= signupForm.controls.Password.value;
    // console.log(this.FirstName);

    console.log(this.signupForm);
    var firstName = this.signupForm.controls['fname'].value;
    console.log("firstname is", firstName);
    var address1 = this.signupForm.get('address').get('address1').value;
    console.log("address2 is", address1);
  }

}
