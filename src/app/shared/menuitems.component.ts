import { Injectable } from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'modules/program', name: 'Program', icon: 'layers' },
    
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
