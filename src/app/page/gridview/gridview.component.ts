import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { GridcardComponent } from '../../components/gridcard/gridcard.component';
import { HttpApiService } from '../../service/http-api.service';
import { server } from '../../../environments/environment.development';

@Component({
  selector: 'app-gridview',
  standalone: true,
  imports: [CommonModule, GridcardComponent],
  templateUrl: './gridview.component.html',
  styleUrl: './gridview.component.scss'
})
export class GridviewComponent implements OnInit {
  private httpservice: HttpApiService = inject(HttpApiService);
  liveData: object = {}
  ngOnInit(): void {
    this.get_card_details()
  }


  get_card_details(): void {
    this.httpservice.http_post_with_body(server.live + `/Dashboarddata/dashboard`, {
      "companyID": sessionStorage['companyId'],
      "branchID": sessionStorage['companyId'],
      "emailId": sessionStorage['userName'],
      "Check": "false",
      "entryPoint": "VTS",
      "dashboardMode": "mobile"
    }).subscribe({
      next: (data: any) => {
        this.liveData = { ...data.liveDatas };
      }
    })
  }

}
