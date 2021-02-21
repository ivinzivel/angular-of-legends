import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from 'src/app/modules/client/background.service';
import { PlayService } from 'src/app/modules/client/play.service';
import { Friends } from 'src/data/friends'
import { Player } from 'src/data/player';

@Component({
  selector: 'app-main-client-layout',
  templateUrl: './main-client-layout.component.html',
  styleUrls: ['./main-client-layout.component.scss']
})
export class MainClientLayoutComponent implements OnInit, AfterViewInit {

  player = Player
  onlineStatus: boolean = true
  geral: boolean = true
  chat: boolean = false
  currentChat: any = {}
  friends: any = Friends
  allFriends: number = this.friends.length
  inQueue: boolean = false
  inLobby: boolean = false
  queueTimeMinutes: number = 0
  queueTimeSeconds: any = 0
  matchAccepted: boolean = false
  matchDeclined: boolean = false
  bugModal: boolean = false

  constructor(private backgroundService: BackgroundService,
              private playService: PlayService,
              private router: Router) {

    this.backgroundService.getBackgroundObservable().subscribe(

      response => {

        document.getElementById('backgroundClient').style.backgroundImage = `url('${response.backgroundUrl}')`
        document.getElementById('backgroundClient').style.backgroundSize = response.backgroundSize
        document.getElementById('backgroundClient').style.backgroundPosition = response.backgroundPosition

      }

    )

    this.playService.getLobbyObservable().subscribe(

      response => {

        if(response == true) {

          this.inLobby = true
          // document.getElementById('scrollableArea').style.height = 'calc(100vh - 314px)'
          document.getElementById('menuAside').style.marginTop = '115px'
          document.getElementById('playInformations').style.right = '0'

        } else {

          this.inLobby = false
          document.getElementById('playInformations').style.right = '-280px'
          setTimeout( () => {

            // document.getElementById('scrollableArea').style.height = 'calc(100vh - 200px)'
            document.getElementById('menuAside').style.marginTop = '0'

          }, 100)

        }

      }

    )

    this.playService.getQueueObservable().subscribe(

      response => {

        if(response == true) {

          document.getElementById('lobbyPreview').style.transform = 'translateX(-280px)'
          document.getElementById('queuePreview').style.right = '0'
          this.inQueue = true
          setTimeout( () => { this.queueTime() }, 1000 )

        } else {

          document.getElementById('lobbyPreview').style.transform = 'translateX(0)'
          document.getElementById('queuePreview').style.right = '-280px'
          document.getElementById('matchFound').classList.remove('match-found-visible')
          this.inQueue = false
          this.queueTimeMinutes = 0
          this.queueTimeSeconds = 0

        }

      }

    )

  }



  ngOnInit(): void {
  }



  ngAfterViewInit(): void {

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

    document.getElementById(`popover${id}`).style.display = 'block'

  }



  hidePopover(id) {

    document.getElementById(`popover${id}`).style.display = 'none'

  }



  changeChatVisibility(friend?) {

    this.chat = !this.chat
    this.currentChat = friend

  }



  queueTime() {

    if(this.queueTimeSeconds < 60) {

      this.queueTimeSeconds = this.queueTimeSeconds + 1
      
    } else {

      this.queueTimeMinutes = this.queueTimeMinutes + 1
      this.queueTimeSeconds = 0

    }

    if(this.queueTimeSeconds == 3) {

      document.getElementById('matchFound').classList.add('match-found-visible')
      document.getElementById('progressBar').style.animationName = 'ProgressBar'
      this.inQueue = false

      setTimeout( () => { 

        if(this.matchAccepted == false && this.inQueue == false) {

          this.playService.changeQueueState(false)
          document.getElementById('matchFound').classList.remove('match-found-visible')
          document.getElementById('progressBar').style.animationName = ''

        }

       }, 14000)

    }

    if(this.inQueue == true) {

      setTimeout( () => { this.queueTime() }, 1000 )

    }
    

  }



  cancelQueue() {

    this.playService.changeQueueState(false)

  }



  acceptMatch() {
    
    this.matchAccepted = true
    this.matchDeclined = false
    document.getElementById('progressBar').style.animationName = ''
    setTimeout( () => {
      this.router.navigateByUrl('/client/game/champion-select')
    }, 2000 )

  }



  cancelMatch() {

    if(this.matchAccepted == false) {

      this.matchAccepted = false
      this.matchDeclined = true
      this.playService.changeQueueState(false)
      document.getElementById('progressBar').style.animationName = ''
      setTimeout( () => { this.matchDeclined = false }, 1000 )
      this.playService.changeQueueState(false)

    }

  }



  changeBugModalVisibility() {

    this.bugModal = !this.bugModal

  }

}
