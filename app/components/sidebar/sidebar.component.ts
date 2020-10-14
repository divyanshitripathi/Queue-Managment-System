import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsedsecond = true;
  public isCollapsedthird = true;
  public show: boolean = true;
  public show1: boolean = true;
  isNavbarCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showfunction() {
    this.show = !this.show;
  }

  logout() {
    return this.router.navigateByUrl("/login")
  }

  showfunction1() {
    this.show1 = !this.show1;
  }



}
