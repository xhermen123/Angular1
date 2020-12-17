import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../../common/utils/routes-map.util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  AppRoutes = AppRoutes;

  constructor() { }

  ngOnInit() {
  }

  onClickExploreMore() {
    let offsetTop = document.getElementById("ad-sector").offsetTop;
    window.scrollTo(0, offsetTop);
  }
}