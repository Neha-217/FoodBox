import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminloginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.adminloginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  adminlogIn(){
    this._http.get<any>("http://localhost:8080/admin/").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.adminloginForm.value.email && a.password === this.adminloginForm.value.password
      })
      if (user){
        alert("Login Successful");
        this.adminloginForm.reset();
        this.router.navigate(['products-list'])
      }
     else{
        alert("Admin Not Found!!")
      }
    },err=>{
      alert("Something is Wrong!!")
    }
    )

  }
}
