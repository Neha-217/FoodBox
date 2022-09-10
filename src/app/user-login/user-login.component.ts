import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userloginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.userloginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  userlogIn() {
    this._http.get<any>("http://localhost:8080/user/").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.userloginForm.value.email && a.password === this.userloginForm.value.password
      })
      if (user){
        alert("Login Successful");
        this.userloginForm.reset();
        this.router.navigate(['products'])
      }
      else{
        alert("User Not Found!!")
      }
    },err=>{
      alert("Something is Wrong!!")
    }
    )
  
  }

}
