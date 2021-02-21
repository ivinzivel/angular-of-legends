import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../background.service';
import { SoundService } from '../../sound.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private soundService: SoundService ) {}

  ngOnInit(): void {
  }



  playSound(sound) {

    this.soundService.playSound(sound)

  }

}
