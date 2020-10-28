import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { User } from '../../../class/user';
import { UserServiceService } from '../../../services/user-service.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { from } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = "Hola Mundo";
  color: string = "red"
  userList: User[];
  buscar: string;

  constructor(private router:Router, public userService: UserServiceService) { }

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  getdata()
  {
    this.userService.GetNewList().snapshotChanges().subscribe(item =>{
      this.userList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$userKey"] = element.key;
        this.userList.push(x as User);
      });
      
      this.userList = this.userList.filter(data => {
        return data.email.toString().trim() === this.buscar
      })
      console.log("userlist: "+this.userList);
      if(this.userList.length === 0){
        console.log("tas tonto compa");
      }else{
        console.log("no tas tonto compa");
        this.router.navigate(['/']);
      }
    });
  }

  doLogin() {
    this.buscar = (document.getElementById("data") as HTMLInputElement).value;
    console.log("buscar: "+this.buscar);
    this.getdata();
  }

}
