import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.scss']
})
export class ChampionSelectComponent implements OnInit {

  champions: any = [
    {name: 'Ahri', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ahri-classic.png', selectable: true},
    {name: 'Aatrox', role: 'top', picture: 'https://www.mobafire.com/images/avatars/aatrox-classic.png', selectable: true},
    {name: 'Akali', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/akali-classic.png', selectable: true},
    {name: 'Alistar', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/alistar-classic.png', selectable: true},
    {name: 'Amumu', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/amumu-classic.png', selectable: true},
    {name: 'Anivia', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/anivia-classic.png', selectable: true},
    {name: 'Annie', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/annie-classic.png', selectable: true},
    {name: 'Aphelios', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/aphelios-classic.png', selectable: true},
    {name: 'Ashe', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/ashe-classic.png', selectable: true},
    {name: 'Aurelion Sol', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/aurelion-sol-classic.png', selectable: true},
    {name: 'Azir', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/azir-classic.png', selectable: true},
    {name: 'Bard', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/bard-classic.png', selectable: true},
    {name: 'Blitzcrank', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/blitzcrank-classic.png', selectable: true},
    {name: 'Brand', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/brand-classic.png', selectable: true},
    {name: 'Braum', role: 'sup', picture: 'https://www.mobafire.com/images/avatars/braum-classic.png', selectable: true},
    {name: 'Caitlyn', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/caitlyn-classic.png', selectable: true},
    {name: 'Camille', role: 'top', picture: 'https://www.mobafire.com/images/avatars/camille-classic.png', selectable: true},
    {name: 'Cassiopeia', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/cassiopeia-classic.png', selectable: true},
    {name: "Cho'Gatch", role: 'top', picture: 'https://www.mobafire.com/images/avatars/chogath-classic.png', selectable: true},
    {name: 'Corki', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/corki-classic.png', selectable: true},
    {name: 'Darius', role: 'top', picture: 'https://www.mobafire.com/images/avatars/darius-classic.png', selectable: true},
    {name: 'Diana', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/diana-classic.png', selectable: true},
    {name: 'Dr.Mundo', role: 'top', picture: 'https://www.mobafire.com/images/avatars/dr-mundo-classic.png', selectable: true},
    {name: 'Draven', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/draven-classic.png', selectable: true},
    {name: 'Ekko', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ekko-classic.png', selectable: true},
    {name: 'Elise', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/elise-classic.png', selectable: true},
    {name: 'Evelynn', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/evelynn-classic.png', selectable: true},
    {name: 'Ezreal', role: 'adc', picture: 'https://www.mobafire.com/images/avatars/ezreal-classic.png', selectable: true},
    {name: 'Fiddlesticks', role: 'jg', picture: 'https://www.mobafire.com/images/avatars/fiddlesticks-classic.png', selectable: true},
    {name: 'Fiora', role: 'top', picture: 'https://www.mobafire.com/images/avatars/fiora-classic.png', selectable: true},
    {name: 'Fizz', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/fizz-classic.png', selectable: true},
    {name: 'Galio', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/galio-classic.png', selectable: true},
    {name: 'Gangplank', role: 'top', picture: 'https://www.mobafire.com/images/avatars/gangplank-classic.png', selectable: true},
    {name: 'Garen', role: 'top', picture: 'https://www.mobafire.com/images/avatars/garen-classic.png', selectable: true},
    {name: 'Gnar', role: 'top', picture: 'https://www.mobafire.com/images/avatars/gnar-classic.png', selectable: true},
    {name: 'Gragas', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/gragas-classic.png', selectable: true},
    {name: 'Graves', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/graves-classic.png', selectable: true},
    {name: 'Hecarim', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/hecarim-classic.png', selectable: true},
    {name: 'Heimerdinger', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/heimerdinger-classic.png', selectable: true},
    {name: 'Illaoi', role: 'top', picture: 'https://www.mobafire.com/images/avatars/illaoi-classic.png', selectable: true},
    {name: 'Irelia', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/irelia-classic.png', selectable: true},
    {name: 'Ivern', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ivern-classic.png', selectable: true},
    {name: 'Janna', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/janna-classic.png', selectable: true},
    {name: 'Jarvan IV', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/jarvan-iv-classic.png', selectable: true},
    {name: 'Jax', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/jax-classic.png', selectable: true},
    {name: 'Jayce', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/jayce-classic.png', selectable: true},
    {name: 'Jhin', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/jhin-classic.png', selectable: true},
    {name: 'Jinx', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/jinx-classic.png', selectable: true},
    {name: "Kai'Sa", role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kaisa-classic.png', selectable: true},
    {name: 'Kalista', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kalista-classic.png', selectable: true},
    {name: 'Karma', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/karma-classic.png', selectable: true},
    {name: 'Karthus', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/karthus-classic.png', selectable: true},
    {name: 'Kassadin', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kassadin-classic.png', selectable: true},
    {name: 'Katarina', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/katarina-classic.png', selectable: true},
    {name: 'Kayle', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kayle-classic.png', selectable: true},
    {name: 'Kayn', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kayn-classic.png', selectable: true},
    {name: 'Kennen', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kennen-classic.png', selectable: true},
    {name: "Kha'Zix", role: 'mid', picture: 'https://www.mobafire.com/images/avatars/khazix-classic.png', selectable: true},
    {name: 'Kindred', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kindred-classic.png', selectable: true},
    {name: 'Kled', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kled-classic.png', selectable: true},
    {name: "Kog'Maw", role: 'mid', picture: 'https://www.mobafire.com/images/avatars/kogmaw-classic.png', selectable: true},
    {name: 'LeBlanc', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/leblanc-classic.png', selectable: true},
    {name: 'Lee Sin', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lee-sin-classic.png', selectable: true},
    {name: 'Leona', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/leona-classic.png', selectable: true},
    {name: 'Lillia', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lillia-classic.png', selectable: true},
    {name: 'Lissandra', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lissandra-classic.png', selectable: true},
    {name: 'Lucian', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lucian-classic.png', selectable: true},
    {name: 'Lulu', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lulu-classic.png', selectable: true},
    {name: 'Lux', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/lux-classic.png', selectable: true},
    {name: 'Malphite', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/malphite-classic.png', selectable: true},
    {name: 'Malzahar', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/malzahar-classic.png', selectable: true},
    {name: 'Maokai', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/maokai-classic.png', selectable: true},
    {name: 'Master Yi', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/master-yi-classic.png', selectable: true},
    {name: 'Miss Fortune', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/miss-fortune-classic.png', selectable: true},
    {name: 'Mordekaiser', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/mordekaiser-classic.png', selectable: true},
    {name: 'Morgana', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/morgana-classic.png', selectable: true},
    {name: 'Nami', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/nami-classic.png', selectable: true},
    {name: 'Nasus', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/nasus-classic.png', selectable: true},
    {name: 'Nautilus', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/nautilus-classic.png', selectable: true},
    {name: 'Neeko', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/neeko-classic.png', selectable: true},
    {name: 'Nidalee', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/nidalee-classic.png', selectable: true},
    {name: 'Nocturne', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/nocturne-classic.png', selectable: true},
    {name: 'Nunu & Willump', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/nunu-amp-willump-classic.png', selectable: true},
    {name: 'Olaf', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/olaf-classic.png', selectable: true},
    {name: 'Orianna', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/orianna-classic.png', selectable: true},
    {name: 'Ornn', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ornn-classic.png', selectable: true},
    {name: 'Pantheon', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/pantheon-classic.png', selectable: true},
    {name: 'Poppy', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/poppy-classic.png', selectable: true},
    {name: 'Pyke', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/pyke-classic.png', selectable: true},
    {name: 'Qiyana', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/qiyana-classic.png', selectable: true},
    {name: 'Quinn', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/quinn-classic.png', selectable: true},
    {name: 'Rakan', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/rakan-classic.png', selectable: true},
    {name: 'Rammus', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/rammus-classic.png', selectable: true},
    {name: "Rek'Sai", role: 'mid', picture: 'https://www.mobafire.com/images/avatars/reksai-classic.png', selectable: true},
    {name: 'Rell', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/rell-classic.png', selectable: true},
    {name: 'Renekton', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/renekton-classic.png', selectable: true},
    {name: 'Rengar', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/rengar-classic.png', selectable: true},
    {name: 'Riven', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/riven-classic.png', selectable: true},
    {name: 'Rumble', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/rumble-classic.png', selectable: true},
    {name: 'Ryze', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ryze-classic.png', selectable: true},
    {name: 'Samira', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/samira-classic.png', selectable: true},
    {name: 'Sejuani', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/sejuani-classic.png', selectable: true},
    {name: 'Senna', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/senna-classic.png', selectable: true},
    {name: 'Seraphine', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/seraphine-classic.png', selectable: true},
    {name: 'Sett', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/sett-classic.png', selectable: true},
    {name: 'Shaco', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/shaco-classic.png', selectable: true},
    {name: 'Shen', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/shen-classic.png', selectable: true},
    {name: 'Shyvana', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/shyvana-classic.png', selectable: true},
    {name: 'Singed', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/singed-classic.png', selectable: true},
    {name: 'Sion', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/sion-classic.png', selectable: true},
    {name: 'Sivir', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/sivir-classic.png', selectable: true},
    {name: 'Skarner', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/skarner-classic.png', selectable: true},
    {name: 'Sona', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/sona-classic.png', selectable: true},
    {name: 'Soraka', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/soraka-classic.png', selectable: true},
    {name: 'Swain', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/swain-classic.png', selectable: true},
    {name: 'Sylas', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/sylas-classic.png', selectable: true},
    {name: 'Syndra', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/syndra-classic.png', selectable: true},
    {name: 'Tahm Kench', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/tahm-kench-classic.png', selectable: true},
    {name: 'Taliyah', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/taliyah-classic.png', selectable: true},
    {name: 'Talon', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/talon-classic.png', selectable: true},
    {name: 'Taric', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/taric-classic.png', selectable: true},
    {name: 'Teemo', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/teemo-classic.png', selectable: true},
    {name: 'Thresh', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/thresh-classic.png', selectable: true},
    {name: 'Tristana', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/tristana-classic.png', selectable: true},
    {name: 'Trundle', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/trundle-classic.png', selectable: true},
    {name: 'Tryndamere', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/tryndamere-classic.png', selectable: true},
    {name: 'Twisted Fate', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/twisted-fate-classic.png', selectable: true},
    {name: 'Twitch', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/twitch-classic.png', selectable: true},
    {name: 'Udyr', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/udyr-classic.png', selectable: true},
    {name: 'Urgot', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/urgot-classic.png', selectable: true},
    {name: 'Varus', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/varus-classic.png', selectable: true},
    {name: 'Vayne', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/vayne-classic.png', selectable: true},
    {name: 'Veigar', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/veigar-classic.png', selectable: true},
    {name: "Vel'Koz", role: 'mid', picture: 'https://www.mobafire.com/images/avatars/velkoz-classic.png', selectable: true},
    {name: 'Vi', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/vi-classic.png', selectable: true},
    {name: 'Viego', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/viego-classic.png', selectable: true},
    {name: 'Viktor', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/viktor-classic.png', selectable: true},
    {name: 'Vladimir', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/vladimir-classic.png', selectable: true},
    {name: 'Volibear', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/volibear-classic.png', selectable: true},
    {name: 'Warwick', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/warwick-classic.png', selectable: true},
    {name: 'Wukong', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/wukong-classic.png', selectable: true},
    {name: 'Xayah', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/xayah-classic.png', selectable: true},
    {name: 'Xerath', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/xerath-classic.png', selectable: true},
    {name: 'Xin Zhao', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/xin-zhao-classic.png', selectable: true},
    {name: 'Yasuo', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/yasuo-classic.png', selectable: true},
    {name: 'Yone', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/yone-classic.png', selectable: true},
    {name: 'Yorick', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/yorick-classic.png', selectable: true},
    {name: 'Yuumi', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/yuumi-classic.png', selectable: true},
    {name: 'Zac', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/zac-classic.png', selectable: true},
    {name: 'Zed', role:'mid', picture: 'https://www.mobafire.com/images/avatars/zed-classic.png', selectable: true},
    {name: 'Ziggs', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/ziggs-classic.png', selectable: true},
    {name: 'Zilean', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/zilean-classic.png', selectable: true},
    {name: 'Zoe', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/zoe-classic.png', selectable: true},
    {name: 'Zyra', role: 'mid', picture: 'https://www.mobafire.com/images/avatars/zyra-classic.png'}
  ]

  declarePeriod: boolean = false
  banPeriod: boolean = false
  banReviewPeriod: boolean = false
  pickPeriod: boolean = false

  timerActive: boolean = false
  timerNumber: number = 15

  currentChampionSelected: object = null
  currentChampionSelectedIndex: number = null
  currentChampionBanSelected: object = null
  currentChampionBanSelectedIndex: number = null

  enemyPicks: any = []

  allyBans: object = null
  enemyBans: any = []


  constructor(private router: Router) { }

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

                      if(this.allyBans == null) {

                        // this.router.navigateByUrl('client/play/lobby')

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
    this.banPeriod = false
    this.banReviewPeriod = true
    this.timerActive = false
    this.timerNumber = 30

    do {

      let randomChampion = this.champions[Math.floor(Math.random() * this.champions.length)]

      this.enemyBans.push(randomChampion)

    } while( this.enemyBans.length < 5 )

    setTimeout( () => {

      for(let ban of this.enemyBans) {
  
        this.champions[this.champions.indexOf(ban)].selectable = false
  
      }

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

    this.banReviewPeriod = false
    this.pickPeriod = true
    this.timerActive = false

  }



  initTimer() {

    setTimeout( () => {

      this.timerNumber = this.timerNumber - 1

      if(this.timerNumber > 0) {

        this.initTimer()

      }

    },1000)


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

      this.allyBans = this.currentChampionBanSelected
      this.champions[this.currentChampionBanSelectedIndex].selectable = false

      console.log(this.champions[this.currentChampionBanSelectedIndex])

      this.initBanReviewPeriod()

    }

  }



  pickChampion() {

    if(this.currentChampionSelected !== null) {

    }

  }

}
