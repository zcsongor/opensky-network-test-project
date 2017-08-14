import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  model: any = {};
  error: boolean;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private renderer: Renderer) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
  }

  login() {
    if (this.model.username === 'demo' && this.model.password === 'demo') {
      localStorage.setItem('token',
        'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVtbyIsImFkbWluIjp0cnVlfQ.NjyOSU3RMjgq9mq10TjGGILD4sUDgMKLNfC2qjbYiR4');
      this.router.navigate(['home']);
    } else {
      this.error = true;
    }
  }
}
