import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styles: [
    `
      li {
        list-style: none;
      }
      .active {
        background: #2a344a;
      }
    `,
  ],
})
export class SideNavBarComponent implements OnInit {
  link: any = 'customers';
  constructor() {}

  ngOnInit(): void {}
}
