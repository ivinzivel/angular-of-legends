import { Component, OnInit } from '@angular/core';
import { SoundService } from '../../sound.service';

@Component({
  selector: 'app-play-menu',
  templateUrl: './play-menu.component.html',
  styleUrls: ['./play-menu.component.scss']
})
export class PlayMenuComponent implements OnInit {

  constructor(private soundService: SoundService) {}

  ngOnInit(): void {
  }



  playSound(sound) {

    this.soundService.playSound(sound)

  }

}
