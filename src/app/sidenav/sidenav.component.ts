import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import {navDataLink} from './sideNavData'

export interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed:boolean = true;
  screenWidth:number = 0;
  navData = navDataLink;
  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }
  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

}
