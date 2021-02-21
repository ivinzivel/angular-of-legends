import { Component, OnInit } from '@angular/core';
import { Player } from 'src/data/player';
import { SoundService } from '../../sound.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  player: any = Player
  overview: boolean = true

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
  }



  changeBannerVisible(condition) {

    this.overview = condition

  }



  playSound(sound) {

    this.soundService.playSound(sound)

  }

}
