import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Menu } from '../../interface/common.interface';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonService } from '../../service/common.service';

export const menu: Menu[] = [
  { label: 'DashBoard', url: "/dashboard", icon: 'bi bi-house-check-fill' },
  { label: 'GridView', url: "/gridview", icon: 'bi bi-grid-3x3-gap' },
  { label: 'TrackRecord', url: "/trackhistory", icon: 'bi bi-clock-history' },
  { label: 'MapView', url: "/mapview", icon: 'bi bi-map-fill' },
  { label: 'Warning', url: "/alerts", icon: 'bi bi-exclamation-triangle-fill' },  
  { label: 'logOut', url: "/login", icon: 'bi bi-box-arrow-right' },
  
]


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  MenuList: Menu[] = [];
  companyId: string = sessionStorage['companyId']
  private commonservice: CommonService = inject(CommonService)

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.MenuList = [...menu]
  }

}
