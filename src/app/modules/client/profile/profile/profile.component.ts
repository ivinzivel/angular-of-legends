import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  overview: boolean = true

  constructor() { }

  ngOnInit(): void {
  }



  changeBannerVisible(condition) {

    this.overview = condition

  }

}
