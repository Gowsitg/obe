import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnDestroy,AfterViewInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItems } from '../menuitems.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;
  @ViewChild('snav') sidenav!: MatSidenav;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,private roter: Router,
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  

  toggleSidebar() {
    if (this.sidenav) { 
      const sidebarElement = document.querySelector('.dark-sidebar') as HTMLElement;
      sidebarElement.classList.toggle('collapsed');
      if (this.sidenav.mode === 'over') {
        this.sidenav.toggle(); 
      }
     
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
}
