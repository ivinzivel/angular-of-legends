import { Component, HostListener, OnInit } from '@angular/core';

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

  }



  adjustChampion(champion) {

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
      case 'Ashe':
        return 'three-hundred-ten-pixels'
      case 'Aurelion Sol':
        return 'four-hundred-thirty-pixels'
      case 'Azir':
        return 'three-hundred-fifteen-pixels'
      case 'Bard':
        return 'three-hundred-sixty-pixels'
      case 'Blitzcrank':
        return 'three-hundred-twenty-five-pixels'
      case 'Brand':
        return 'two-hundred-seventy-five-pixels'
      case 'Braum':
        return 'two-hundred-ninety-pixels'
      case 'Caitlyn':
        return 'two-hundred-ninety-five-pixels'
      case 'Camille':
        return 'two-hundred-ninety-five-pixels'
      case 'Cassiopeia':
        return 'three-hundred-sixty-pixels'
      case "Cho'Gatch":
        return 'three-hundred-sixty-pixels'
      case 'Corki':
        return 'three-hundred-fifteen-pixels'
      case 'Darius':
        return 'three-hundred-ninety-pixels'
      case 'Diana':
        return 'three-hundred-fifteen-pixels'
      case 'Dr.Mundo':
        return 'three-hundred-fifteen-pixels'
      case 'Draven':
        return 'three-hundred-twenty-five-pixels'
      case 'Ekko':
        return 'three-hundred-twenty-five-pixels'
      case 'Elise':
        return 'three-hundred-twenty-five-pixels'
      case 'Evelynn':
        return 'four-hundred-forty-pixels'
      case 'Ezreal':
        return 'three-hundred-sixty-pixels'
      case 'Fiddlesticks':
        return 'five-hundred-forty-pixels'
      case 'Fiora':
        return 'three-hundred-sixty-pixels'
      case 'Fizz':
        return 'three-hundred-pixels'
      case 'Galio':
        return 'four-hundred-seventy-pixels'
      case 'Gangplank':
        return 'three-hundred-pixels'
      case 'Garen':
        return 'three-hundred-pixels'
      case 'Gnar':
        return 'three-hundred-pixels'
      case 'Gragas':
        return 'three-hundred-sixty-pixels'
      case 'Graves':
        return 'three-hundred-sixty-pixels'
      case 'Hecarim':
        return 'three-hundred-pixels'
      case 'Heimerdinger':
        return 'three-hundred-pixels'
      case 'Illaoi':
        return 'three-hundred-fourty-five-pixels'
      case 'Irelia':
        return 'four-hundred-forty-pixels'
      case 'Ivern':
        return 'four-hundred-forty-pixels'
      case 'Janna':
        return 'two-hundred-ninety-pixels'
      case 'Jarvan IV':
        return 'three-hundred-fourty-five-pixels'
      case 'Jax':
        return 'three-hundred-fourty-five-pixels'
      case 'Jayce':
        return 'three-hundred-fourty-five-pixels'
      case 'Jhin':
        return 'four-hundred-fifteen-pixels'
      case 'Jinx':
        return 'three-hundred-fourty-five-pixels'
      case "Kai'Sa":
        return 'four-hundred-seventy-pixels'
      case 'Kalista':
        return 'three-hundred-sixty-pixels'
      case 'Karma':
        return 'three-hundred-pixels'
      case 'Karthus':
        return 'four-hundred-pixels'
      case 'Kassadin':
        return 'three-hundred-ten-pixels'
      case 'Katarina':
        return 'three-hundred-sixty-pixels'
      case 'Kayle':
        return 'four-hundred-thirty-pixels'
      case 'Kayle':
        return 'four-hundred-thirty-pixels'
      case 'Kennen':
        return 'three-hundred-twenty-five-pixels'
      case "Kha'Zix":
        return 'three-hundred-twenty-five-pixels'
      case 'Kindred':
        return 'three-hundred-twenty-five-pixels'
      case 'Kled':
        return 'three-hundred-pixels'
      case "Kog'Maw":
        return 'three-hundred-pixels'
      case 'LeBlanc':
        return 'three-hundred-twenty-five-pixels'
      case 'Lee Sin':
        return 'three-hundred-sixty-pixels'
      case 'Leona':
        return 'two-hundred-sixty-five-pixels'
      case 'Lissandra':
        return 'three-hundred-twenty-five-pixels'
      case 'Lucian':
        return 'three-hundred-twenty-five-pixels'
      case 'Lulu':
        return 'three-hundred-twenty-five-pixels'
      case 'Lux':
        return 'three-hundred-sixty-pixels'
      case 'Malphite':
        return 'three-hundred-sixty-pixels'
      case 'Malzahar':
        return 'four-hundred-pixels'
      case 'Maokai':
        return 'four-hundred-pixels'
      case 'Master Yi':
        return 'two-hundred-ninety-pixels'
      case 'Miss Fortune':
        return 'two-hundred-ninety-pixels'
      case 'Morgana':
        return 'five-hundred-forty-pixels'
      case 'Nami':
        return 'two-hundred-ninety-pixels'
      case 'Nasus':
        return 'three-hundred-sixty-pixels'
      case 'Nautilus':
        return 'three-hundred-pixels'
      case 'Nidalee':
        return 'three-hundred-pixels'
      case 'Nocturne':
        return 'three-hundred-sixty-pixels'
      case 'Nunu & Willump':
        return 'three-hundred-sixty-pixels'
      case 'Olaf':
        return 'three-hundred-sixty-pixels'
      case 'Orianna':
        return 'two-hundred-ninety-pixels'
      case 'Poppy':
        return 'three-hundred-sixty-pixels'
      case 'Quinn':
        return 'three-hundred-sixty-pixels'
      case 'Rakan':
        return 'three-hundred-sixty-pixels'
      case 'Rammus':
        return 'three-hundred-sixty-pixels'
      case 'Rengar':
        return 'three-hundred-sixty-pixels'
      case 'Riven':
        return 'three-hundred-pixels'
      case 'Rumble':
        return 'three-hundred-sixty-pixels'
      case 'Ryze':
        return 'three-hundred-pixels'
      case 'Sejuani':
        return 'three-hundred-sixty-pixels'
      case 'Shaco':
        return 'three-hundred-pixels'
      case 'Shen':
        return 'three-hundred-pixels'
      case 'Shyvana':
        return 'three-hundred-twenty-five-pixels'
      case 'Singed':
        return 'three-hundred-twenty-five-pixels'
      case 'Sion':
        return 'three-hundred-twenty-five-pixels'
      case 'Sivir':
        return 'three-hundred-sixty-pixels'
      case 'Skarner':
        return 'three-hundred-sixty-pixels'
      case 'Skarner':
        return 'three-hundred-sixty-pixels'
      case 'Sona':
        return 'three-hundred-sixty-pixels'
      case 'Swain':
        return 'three-hundred-sixty-pixels'
      case 'Syndra':
        return 'three-hundred-pixels'
      case 'Tahm Kench':
        return 'three-hundred-twenty-five-pixels'
      case 'Taliyah':
        return 'three-hundred-twenty-five-pixels'
      case 'Talon':
        return 'three-hundred-sixty-pixels'
      case 'Taric':
        return 'three-hundred-pixels'
      case 'Teemo':
        return 'three-hundred-pixels'
      case 'Thresh':
        return 'three-hundred-sixty-pixels'
      case 'Tristana':
        return 'three-hundred-sixty-pixels'
      case 'Trundle':
        return 'three-hundred-sixty-pixels'
      case 'Tryndamere':
        return 'three-hundred-pixels'
      case 'Twisted Fate':
        return 'three-hundred-pixels'
      case 'Vayne':
        return 'three-hundred-pixels'
      case 'Veigar':
        return 'three-hundred-sixty-pixels'
      case 'Vi':
        return 'three-hundred-sixty-pixels'
      case 'Viego':
        return 'three-hundred-sixty-pixels'
      case 'Viktor':
        return 'three-hundred-sixty-pixels'
      case 'Vladimir':
        return 'three-hundred-sixty-pixels'
      case 'Volibear':
        return 'three-hundred-sixty-pixels'
      case 'Warwick':
        return 'three-hundred-sixty-pixels'
      case 'Wukong':
        return 'three-hundred-sixty-pixels'
      case 'Xayah':
        return 'three-hundred-sixty-pixels'
      case 'Yasuo':
        return 'three-hundred-pixels'
      case 'Yorick':
        return 'three-hundred-sixty-pixels'
      case 'Yuumi':
        return 'four-hundred-seventy-pixels'
      case 'Zac':
        return 'three-hundred-sixty-pixels'
      case 'Zed':
        return 'three-hundred-twenty-five-pixels'
      case 'Ziggs':
        return 'three-hundred-pixels'
      case 'Zyra':
        return 'three-hundred-pixels'
    }

  }

  @HostListener('document:mousemove', ['$event']) 

  onMouseMove(mouseTrack) {

    let offsetX = mouseTrack.pageX / 100
    
    document.getElementById('blueTeam').style.transform = `translateX(${offsetX}px)`
    document.getElementById('redTeam').style.transform = `translateX(-${offsetX}px)`

  }

}
