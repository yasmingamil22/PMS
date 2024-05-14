import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild(SidebarComponent) sideBar: SidebarComponent | undefined

 takechanging:boolean = true ;

 handleChanging(value: boolean) {
  this.takechanging = value;
}

}
