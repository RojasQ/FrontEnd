import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { User } from '../../../class/user';
import { UserServiceService } from '../../../services/user-service.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { from } from 'rxjs';
import { auth } from 'firebase';
import Swal from 'sweetalert2';
import { type } from 'os';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // userForm = new FormGroup({
  //   email: new FormControl('pabhoz@gmail.com', Validators.required),
  //   username: new FormControl('', Validators.required),
  //   name: new FormControl('', Validators.required),
  //   lname: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  //   favNumber: new FormControl(''),
  // });
  aut: AuthService = new AuthService;

  userList: User[];
  // btn: any;


  constructor(private router:Router, private authService:AuthService, public userService: UserServiceService) { 
    
  }

  ngOnInit(): void {
    // this.btn = document.getElementById("submmitbtn").addEventListener("click", (e)=>{
    //   console.log(e);
    // })
    this.aut.logout()
  }

  onSubmmit(userForm: NgForm)
  {
    if((document.getElementById("register-password") as HTMLInputElement).value === (document.getElementById("register-Cpassword") as HTMLInputElement).value){
      this.userService.GetNewList();
      if(userForm.value.$userkey == null){
        if(((document.getElementById("register-email") as HTMLInputElement).value).indexOf("@")){
          if(typeof(parseInt((document.getElementById("register-phone") as HTMLInputElement).value)) === "number"){
            Swal.fire(
              'Usuario Registrado',
              'Registrado con exito',
              'success'
            )
            this.userService.createUser(userForm.value);
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'No es un teléfono',
              text: '¡Algo salió mal!',
            })
          }
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'No es un Email',
            text: '¡Algo salió mal!',
          })
        }

      }else{
        Swal.fire({
          icon: 'error',
          title: 'Usuario ya existente',
          text: '¡Algo salió mal!',
        })
      }
      this.router.navigate(['/']);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Contraseñas no coinciden',
        text: '¡Algo salió mal!',
      })
    }
  }

  // doRegister(e) {
  //   e.preventDefault();

  //   const user: User = {
  //     email: "pabhoz@usbcali.edu.co",
  //     name: "pabhoz",
  //     lname: "Bejarano",
  //     password: "suanfanzon",
  //     phone: 318234381
  //   };

  //   console.log(this.userForm);

  //   //this.authService.login(user);

  //   //this.router.navigate(['/']);
  // }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
