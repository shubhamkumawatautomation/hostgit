import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit(): void { }

  LoginCall() {
    this.router.navigateByUrl('/admin/dashboard')
  }
}
