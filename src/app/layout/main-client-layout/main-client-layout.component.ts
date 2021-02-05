import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/modules/client/background.service';

@Component({
  selector: 'app-main-client-layout',
  templateUrl: './main-client-layout.component.html',
  styleUrls: ['./main-client-layout.component.scss']
})
export class MainClientLayoutComponent implements OnInit, AfterViewInit {

  onlineStatus: boolean = true
  geral: boolean = false
  chat: boolean = false
  friends: any = [
    { id: 1, name: 'Weslley', status: 0, statusMessage: 'Online', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4770.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://www.mobafire.com/images/champion/skins/landscape/irelia-high-noon.jpg', rank: 'Platinum', rankTier: 'II' },
    { id: 2, name: 'Kevin', status: 0, statusMessage: 'Online', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon3018.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg', rank: 'Platinum', rankTier: 'I' },
    { id: 3, name: 'Mark', status: 2, statusMessage: 'Ranqueada Solo Duo', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4653.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://www.mobafire.com/images/champion/skins/landscape/vayne-spirit-blossom.jpg', rank: 'Platinum', rankTier: 'IV' },
    { id: 4, name: 'Paul', status: 2, statusMessage: 'Ranqueada Flexivel', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon4025.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://blogoflegends.com/files/2019/02/sinful-succulence-morgana.jpg', rank: 'Platinum', rankTier: 'III' },
    { id: 5, name: 'Jorge', status: 0, statusMessage: 'Online', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1636.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg', rank: 'Platinum', rankTier: 'I' },
    { id: 6, name: 'Link', status: 0, statusMessage: 'Online', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1626.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://preview.redd.it/0fhoka1lrlf51.png?width=822&format=png&auto=webp&s=ed3ba56b804eee1300f85c1173c60b4bd9ea5eb9', rank: 'Platinum', rankTier: 'II' },
    { id: 7, name: 'Elly', status: 0, statusMessage: 'Online', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg', rank: 'Platinum', rankTier: 'II' },
    { id: 8, name: 'Zelda', status: 2, statusMessage: 'Na Fila', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1627.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://support-leagueoflegends.riotgames.com/hc/article_attachments/360089636874/PsyOps_Samira_FINAL.jpg', rank: 'Platinum', rankTier: 'II' },
    { id: 9, name: 'Epona', status: 3, statusMessage: 'AFK', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1628.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://www.mobafire.com/images/champion/skins/landscape/tryndamere-chemtech.jpg', rank: 'Platinum', rankTier: 'III' },
    { id: 10, name: 'Luke', status: 1, statusMessage: 'Offline', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1629.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_4.jpg', rank: 'Platinum', rankTier: 'IV' },
    { id: 11, name: 'Darth', status: 1, statusMessage: 'Offline', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1630.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://www.mobafire.com/images/champion/skins/landscape/vladimir-cosmic-devourer.jpg', rank: 'Platinum', rankTier: 'I' },
    { id: 12, name: 'Leia', status: 1, statusMessage: 'Offline', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1631.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://uailistar.com/wp-content/uploads/2020/05/Lux_7-696x411.jpg', rank: 'Platinum', rankTier: 'I' },
    { id: 13, name: 'Jhon smurf', status: 1, statusMessage: 'Offline', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1632.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1168636c3a93b9e9/5f52d5af95701623b75e6d1d/01_Banner_State_Of_Skins_Kindred_Splash.jpg', rank: 'Platinum', rankTier: 'IV' },
    { id: 14, name: 'Yoda', status: 1, statusMessage: 'Offline', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1634.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_8.jpg', rank: 'Platinum', rankTier: 'IV' },
    { id: 15, name: 'Kami', status: 1, statusMessage: 'Offline', profilePicture: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1635.jpg?image=q_auto:best&v=1518361200', profileBackground: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/Katarina_DeathSwornSkin-f0d9492b7a83186ecc95b4ce3547d833.jpg', rank: 'Platinum', rankTier: 'I' }
  ]
  amigosTotal: number = this.friends.length

  constructor(private backgroundService: BackgroundService) {

    this.backgroundService.getBackgroundObservable().subscribe(

      response => {

        document.getElementById('main-content').style.backgroundImage = `url('${response}')`

      }

    )

  }



  ngOnInit(): void {
  }



  ngAfterViewInit(): void {

    // this.ajustPopoversPosition()

  }



  changeOnlineStatus() {

    this.onlineStatus = !this.onlineStatus

  }



  changeGeralVisibility() {

    this.geral = !this.geral

  }



  ajustPopoversPosition() {

    for(let friend of this.friends) {

      var friendContainer = document.getElementById(`friend${friend.id}`)
      var popover = document.getElementById(`popover${friend.id}`)
  
      var bodyRect = document.body.getBoundingClientRect(),
      elemRect = friendContainer.getBoundingClientRect(),
      offset   = (elemRect.top - bodyRect.top) - 110
  
      popover.style.top = `${offset}px`

    }

  }



  showPopover(id) {

    document.getElementById(`popover${id}`).style.opacity = '1'

  }



  hidePopover(id) {

    document.getElementById(`popover${id}`).style.opacity = '0'

  }



  changeChatVisibility() {

    this.chat = !this.chat

  }

}
