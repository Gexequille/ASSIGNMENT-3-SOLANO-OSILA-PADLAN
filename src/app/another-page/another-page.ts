import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  templateUrl: './another-page.html',
})
export class AnotherPagePage {
  ngOnInit() {}
  // To have an authentication before entering the page
  constructor(
    private router: Router,
    private authenticate: AuthenticationService
  ) {}
}
