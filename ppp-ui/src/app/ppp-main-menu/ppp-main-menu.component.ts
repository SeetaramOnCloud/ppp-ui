import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ppp-main-menu',
  templateUrl: './ppp-main-menu.component.html',
  styleUrls: ['./ppp-main-menu.component.less']
})
export class PppMainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

navigateMenu(tag){
  if(tag === 'layout'){
       this.router.navigate(['/layout']);
      }

    if(tag === 'svg'){
       this.router.navigate(['/svg']);
      }
}

}
