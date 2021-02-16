import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  playerPick: any = JSON.parse(localStorage.getItem('playerPick'))
  allyTeam: any = JSON.parse(localStorage.getItem('allyTeam'))
  enemyTeam: any = JSON.parse(localStorage.getItem('enemyTeam'))

  constructor() { }

  ngOnInit(): void {

    console.log(this.allyTeam)

  }



  adjustChampion(champion) {

    console.log(champion)

    switch (champion) {
      case 'Ahri':
        return 'three-hundred-sixty-pixels'
      case 'Aatrox':
        return 'three-hundred-sixty-pixels'
      case 'Alistar':
        return 'three-hundred-ninety-pixels'
      case 'Amumu':
        return 'three-hundred-sixty-pixels'
      case 'Annie':
        return 'two-hundred-sixty-five-pixels'
      default:
        return 'zyra-adjust'
    }

  }

}
