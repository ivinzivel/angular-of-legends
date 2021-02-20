import { Component, OnInit } from '@angular/core';
import { Player } from 'src/data/player';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  player: any = Player
  overview: boolean = true

  constructor() { }

  ngOnInit(): void {
  }



  changeBannerVisible(condition) {

    this.overview = condition

  }

}
