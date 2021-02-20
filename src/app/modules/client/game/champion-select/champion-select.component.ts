import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champions } from 'src/data/champions';
import { Player } from 'src/data/player';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.scss']
})
export class ChampionSelectComponent implements OnInit {

  player: any = Player

  champions: any = Champions

  declarePeriod: boolean = false
  banPeriod: boolean = false
  banReviewPeriod: boolean = false
  pickPeriod: boolean = false
  loadOutPeriod: boolean = false

  filter: string = 'all'

  timerActive: boolean = false
  timerNumber: number = 15

  currentChampionSelected: any = null
  currentChampionSelectedIndex: number = null
  currentChampionBanSelected: any = null
  currentChampionBanSelectedIndex: number = null

  playerPick: boolean = false
  allyPicks: any = []
  enemyPicks: any = []

  playerBan: any = null
  allyBans: any = []
  enemyBans: any = []

  championsAvaliables: any = []


  constructor(private router: Router) {

  }

  ngOnInit(): void {

    setTimeout( () => {

      document.getElementById('player1').classList.remove('ally-team-champs-intro-animation')

      setTimeout( () => {

        document.getElementById('player2').classList.remove('ally-team-champs-intro-animation')

        setTimeout( () => {

          document.getElementById('player3').classList.remove('ally-team-champs-intro-animation')
          document.getElementById('assigned').style.opacity = '1' 

          setTimeout( () => {
  
            document.getElementById('player4').classList.remove('ally-team-champs-intro-animation')

            setTimeout( () => {
    
              document.getElementById('player5').classList.remove('ally-team-champs-intro-animation')

              setTimeout( () => {

                this.initDeclarePeriod()

                setTimeout( () => {

                  this.timerActive = false

                  document.getElementById('allyBarWrapper').classList.remove('blue-bar')
                  document.getElementById('enemyBarWrapper').classList.remove('blue-bar')
                  document.getElementById('allyBar').classList.remove('bar-fifteen-seconds')
                  document.getElementById('enemyBar').classList.remove('bar-fifteen-seconds')
                  document.getElementById('allyBarWrapper').classList.add('red-bar')
                  document.getElementById('enemyBarWrapper').classList.add('red-bar')

                  setTimeout( () => {
  
                    this.initBanPeriod()

                    setTimeout( () => {

                      if(this.timerActive == true) {

                        this.timerActive = false  

                      }

                      if(this.playerBan == null) {

                        this.router.navigateByUrl('/client/play/lobby')

                      }

                    }, 31000)
  
                  }, 100)

                }, 15000)

              },1000 )
    
            },700 )
  
          },800 )

        },500 )

      },700 )

    }, 1700 )

  }



  initDeclarePeriod() {

    this.declarePeriod = true

    document.getElementById('assigned').style.opacity = '0' 
    document.getElementById('overlayBackground').style.opacity = '.6' 
    document.getElementById('mainContent').style.opacity = '1' 
    document.getElementById('mainContent').style.zIndex = '1' 
    document.getElementById('player1').classList.add('ally-team-champs-border')
    document.getElementById('player2').classList.add('ally-team-champs-border')
    document.getElementById('player3').classList.add('ally-team-champs-border')
    document.getElementById('player4').classList.add('ally-team-champs-border')
    document.getElementById('player5').classList.add('ally-team-champs-border')

    document.getElementById('allyBarWrapper').classList.add('blue-bar')
    document.getElementById('enemyBarWrapper').classList.add('blue-bar')
    document.getElementById('allyBar').classList.add('bar-fifteen-seconds')
    document.getElementById('enemyBar').classList.add('bar-fifteen-seconds')

    this.timerActive = true
    this.initTimer()

  }



  initBanPeriod() {

    this.declarePeriod = false
    this.banPeriod = true

    document.getElementById('overlayBackground').classList.add('overlay-background-ban')
    document.getElementById('allyBar').classList.add('bar-thirty-seconds')
    document.getElementById('enemyBar').classList.add('bar-thirty-seconds')
    document.getElementById('enemyTeamChamps').classList.add('enemy-team-champs-visible')

    this.timerNumber = 30
    this.timerActive = true
    this.initTimer()

  }



  initBanReviewPeriod() {

    document.getElementById('allyBarWrapper').style.opacity = '0'
    document.getElementById('enemyBarWrapper').style.opacity = '0'
    document.getElementById('allyBar').classList.remove('bar-thirty-seconds')
    this.banPeriod = false
    this.banReviewPeriod = true
    this.timerActive = false
    this.timerNumber = 30

    do {

      let randomChampion = this.champions[Math.floor(Math.random() * this.champions.length)]

      this.allyBans.push(randomChampion)

    } while( this.allyBans.length < 4 )

    console.log('Bans alidados:', this.allyBans)

    do {

      let randomChampion = this.champions[Math.floor(Math.random() * this.champions.length)]

      this.enemyBans.push(randomChampion)

    } while( this.enemyBans.length < 5 )

    setTimeout( () => {

      for(let ban of this.enemyBans) {
  
        this.champions[this.champions.indexOf(ban)].selectable = false
  
      }

      for(let ban of this.allyBans) {
  
        this.champions[this.champions.indexOf(ban)].selectable = false
  
      }

      this.championsAvaliables = this.champions.filter(champion => champion.selectable == true)

      do {

        let randomChampion = this.championsAvaliables[Math.floor(Math.random() * this.championsAvaliables.length)]
  
        this.enemyPicks.push(randomChampion)
  
      } while( this.enemyPicks.length < 5 )

      do {

        let randomChampion = this.championsAvaliables[Math.floor(Math.random() * this.championsAvaliables.length)]
  
        this.allyPicks.push(randomChampion)
  
      } while( this.allyPicks.length < 4 )

      console.log('Picks Aliados', this.allyPicks)

    },2000 )

    setTimeout( () => {

      document.getElementById('overlayBackground').classList.remove('overlay-background-ban')
      document.getElementById('bans').style.opacity = '0'
      document.getElementById('bans').style.zIndex = '-2'
      document.getElementById('chamiponList').style.opacity = '1'
      document.getElementById('chamiponList').style.zIndex = '2'

      this.initPickPeriod()

    }, 7000 )


  }



  initPickPeriod() {

    document.getElementById('allyBarWrapper').classList.remove('red-bar')
    document.getElementById('allyBarWrapper').classList.add('blue-bar')
    document.getElementById('allyBarWrapper').style.opacity = '1'
    document.getElementById('allyBar').classList.add('bar-thirty-seconds')
    this.banReviewPeriod = false
    this.pickPeriod = true
    this.timerNumber = 30
    this.timerActive = true

    setTimeout(()=> { 

      if(this.playerPick == false) {
        
        this.router.navigateByUrl('/client/play/lobby')

      }

     }, 30000)

  }



  initLoadOutPeriod() {

    this.loadOutPeriod = true
    document.getElementById('allyBar').classList.add('bar-thirty-seconds')
    document.getElementById('allyBar').style.width = '100%'
    document.getElementById('enemyBarWrapper').classList.add('blue-bar')
    document.getElementById('enemyBar').classList.add('bar-thirty-seconds')
    document.getElementById('enemyBar').style.width = '100%'

    console.log(this.allyPicks)

    localStorage.setItem('playerPick', JSON.stringify(this.currentChampionSelected))
    localStorage.setItem('allyTeam', JSON.stringify(this.allyPicks))
    localStorage.setItem('enemyTeam', JSON.stringify(this.enemyPicks))

    setTimeout(()=> { 

      this.router.navigateByUrl('/client/game/loading')

     }, 30000)

  }



  initTimer() {

    setTimeout( () => {

      this.timerNumber = this.timerNumber - 1

      if(this.timerNumber > 0) {

        this.initTimer()

      }

    }, 1000)


  }



  pickEnemyChampions() {

    do {

      let randomChampion = this.champions[Math.floor(Math.random() * this.champions.length)]

      this.enemyBans.push(randomChampion)

    } while( this.enemyPicks.length < 5 )

    setTimeout( () => {

      for(let ban of this.enemyBans) {
  
        this.champions[this.champions.indexOf(ban)].selectable = false
  
    }

    }, 2000)

  }



  selectChampion(champion, index) {

    if(this.champions[index].selectable == true) {

      if(this.declarePeriod || this.pickPeriod) {

        this.currentChampionSelected = champion
        this.currentChampionSelectedIndex = index

      } else if(this.banPeriod) {

        this.currentChampionBanSelected = champion
        this.currentChampionBanSelectedIndex = index

      }

    }

  }



  banChampion() {

    if(this.currentChampionBanSelected !== null) {
    
      document.getElementById('chamiponList').style.opacity = '0'
      document.getElementById('chamiponList').style.zIndex = '-1'

      this.playerBan = this.currentChampionBanSelected
      this.champions[this.currentChampionBanSelectedIndex].selectable = false

      console.log(this.champions[this.currentChampionBanSelectedIndex])

      this.initBanReviewPeriod()

    }

  }



  pickChampion() {

    console.log(this.enemyBans)

    if(this.currentChampionSelected !== null) {

      this.playerPick = true
      this.pickPeriod = false
      this.timerActive = false
      this.timerNumber = 30
      document.getElementById('chamiponList').style.opacity = '0'
      document.getElementById('chamiponList').style.zIndex = '-2'
      document.getElementById('allyBar').classList.remove('bar-thirty-seconds')
      document.getElementById('enemyBar').classList.remove('bar-thirty-seconds')
      document.getElementById('enemyBarWrapper').classList.remove('red-bar')

      setTimeout(()=>{

        this.initLoadOutPeriod()

      },1)

    }

  }



  changeFilter(filter) {

    if(this.filter == filter) {

      this.filter = 'all'

    } else {

      this.filter = filter

    }

  }

  adjustChampion(champion) {

    console.log(champion)

    switch (champion) {
      case 'Ahri':
        return 'ahri'
      case 'Amumu':
        return 'amumu'
      case 'Annie':
        return 'annie'
      case 'Ashe':
        return 'ashe'
      case 'Azir':
        return 'azir'
      case 'Brand':
        return 'brand'
      case 'Braum':
        return 'braum'
      case 'Caitlyn':
        return 'caitlyn'
      case 'Camille':
        return 'camille'
      case 'Cassiopeia':
        return 'cassiopeia'
      case "Cho'Gatch":
        return 'chogatch'
      case 'Corki':
        return 'corki'
      case 'Diana':
        return 'diana'
      case 'Dr.Mundo':
        return 'drmundo'
      case 'Draven':
        return 'draven'
      case 'Ekko':
        return 'ekko'
      case 'Elise':
        return 'elise'
      case 'Ezreal':
        return 'ezreal'
      case 'Fiora':
        return 'fiora'
      case 'Fizz':
        return 'fizz'
      case 'Galio':
        return 'galio'
      case 'Gangplank':
        return 'gp'
      case 'Garen':
        return 'gp'
      case 'Gnar':
        return 'gp'
      case 'Gragas':
        return 'gp'
      case 'Graves':
        return 'graves'
      case 'Hecarim':
        return 'graves'
      case 'Heimerdinger':
        return 'gp'
      case 'Illaoi':
        return 'illaoi'
      case 'Irelia':
        return 'irelia'
      case 'Janna':
        return 'janna'
      case 'Jarvan IV':
        return 'jarvan'
      case 'Jax':
        return 'jarvan'
      case 'Jayce':
        return 'jarvan'
      case 'Jhin':
        return 'jhin'
      case 'Jinx':
        return 'jinx'
      case "Kai'Sa":
        return 'kaisa'
      case 'Kalista':
        return 'kalista'
      case 'Karma':
        return 'kalista'
      case 'Karthus':
        return 'kalista'
      case 'Kassadin':
        return 'kalista'
      case 'Katarina':
        return 'katarina'
      case 'Kayle':
        return 'kayle'
      case 'Kayn':
        return 'kayn'
      case 'Kennen':
        return 'jarvan'
      case "Kha'Zix":
        return 'khazix'
      case 'Kindred':
        return 'kindred'
      case 'Kled':
        return 'kled'
      case `Kog'Maw`:
        return 'kogmaw'
      case 'Leona':
        return 'leona'
      case 'Lissandra':
        return 'leona'
      case 'Lucian':
        return 'lucian'
      case 'Lulu':
        return 'leona'
      case 'Lux':
        return 'lux'
      case 'Malphite':
        return 'malphite'
      case 'Malzahar':
        return 'malzahar'
      case 'Maokai':
        return 'lucian'
      case 'Master Yi':
        return 'lux'
      case 'Miss Fortune':
        return 'lux'
      case 'Mordekaiser':
        return 'mordekaiser'
      case 'Morgana':
        return 'morgana'
      case 'Nami':
        return 'nami'
      case 'Nasus':
        return 'nami'
      case 'Nautilus':
        return 'nami'
      case 'Nidalee':
        return 'nami'
      case 'Nocturne':
        return 'nami'
      case 'Nunu & Willump':
        return 'nunu'
      case 'Orianna':
        return 'orianna'
      case 'Poppy':
        return 'poppy'
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

}
