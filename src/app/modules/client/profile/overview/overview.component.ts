import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../background.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {

    this.backgroundService.changeBackground({ 
      backgroundUrl: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_10.jpg',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    })

  }

  ngOnInit(): void {
  }

}
