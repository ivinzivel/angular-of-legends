import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  haveCharacters: boolean = false

  constructor( private route: Router) {

    this.loginForm = new FormGroup({

      username: new FormControl()

    })

  }



  ngOnInit(): void {
  }



  makeLogin() {

    if(this.haveCharacters == true) {

      localStorage.setItem('username', this.loginForm.value.username)
      this.route.navigateByUrl('client')
      
    }

  }



  usernameIdentify() {

    console.log(this.loginForm.value.username)

    if(this.loginForm.value.username !== null && this.loginForm.value.username?.length > 0) {

      this.haveCharacters = true

    } else {

      this.haveCharacters = false

    }

  }

}
