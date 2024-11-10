import { AfterViewInit, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpApiService } from '../../service/http-api.service';
import { server } from '../../../environments/environment.development';
import { CommonService } from '../../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {


  loginform: FormGroup;
  private httpservice: HttpApiService = inject(HttpApiService);
  private commonservice: CommonService = inject(CommonService);
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginform = this.fb.group({
      corpid: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngAfterViewInit(): void {
    this.commonservice.sessionClear();
  }


  onSubmit() {
    this.httpservice.http_post_without_token(server.live + `/login/company`, {
      "username": this.loginform.value.username.trim().toLowerCase(),
      "password": this.loginform.value.password.trim(),
      "corpid": this.loginform.value.corpid.trim().toLowerCase(),
      "loginMode": "mobile",
      "entryPoint": 'GE',
      "appsetting": "vts_mobile",
      "platform": "desktop"
    }).subscribe({
      next: (data: any) => {
        this.commonservice.sessionData(data);
        if (data[1].hasOwnProperty('token')) {
          this.router.navigateByUrl('gridview');
          sessionStorage.setItem('userName', this.loginform.value.username.trim().toLowerCase())
        }
      },
      error: (error: any) => {
        console.error('Error while logging in', error);
      }
    });
  }
}
