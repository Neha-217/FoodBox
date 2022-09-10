import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userregistrationForm!:FormGroup

  constructor(private formBuilder: FormBuilder,
    private _http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.userregistrationForm = this.formBuilder.group({
      name:[''],
      phone:[''],
      email:[''],
      password:[''],
      address:['']
    })
  }
  register(){
    this._http.post<any>("http://localhost:8080/user/", this.userregistrationForm.value)
    .subscribe(res=>{
      alert("Registered Successfully!!");
      this.userregistrationForm.reset();
      this.router.navigate(['user-login'])
    }, err=>{
      alert("Something is Wrong!!")
    }
    )
  }
}
