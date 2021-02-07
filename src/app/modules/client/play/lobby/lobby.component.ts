import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../background.service';
import { PlayService } from '../../play.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  inQueue: boolean = false
  roleSelected: string = null

  constructor(private backgroundService: BackgroundService,
              private playService: PlayService) {

    this.backgroundService.changeBackground({ 
      backgroundUrl: 'https://images2.alphacoders.com/913/thumb-1920-913622.jpg',
      backgroundSize: '150%',
      backgroundPosition: 'bottom'
    })

    this.playService.changeLobbyState(true)

    this.playService.getQueueObservable().subscribe(

      response => {

        if(response == true) {

          this.inQueue = true

        } else {

          this.inQueue = false

        }

      }
      
    )

  }

  ngOnInit(): void {

    setTimeout( () => {

      document.getElementById('playerBanner').style.opacity = '1'

      setTimeout( () => {

        document.getElementById('secondBanner').style.opacity = '1'
        document.getElementById('fourthBanner').style.opacity = '1'

        setTimeout( () => {

          document.getElementById('firstBanner').style.opacity = '1'
          document.getElementById('fifthBanner').style.opacity = '1'
    
        }, 200 )
  
      }, 200 )

    }, 200 )

  }



  enterQueue() {

    if(this.roleSelected !== null) {
    
      this.playService.changeQueueState(true)
      this.inQueue = true
    
    }

  }



  cancelQueue() {

    this.playService.changeQueueState(false)
    this.inQueue = false

  }



  closeLobby() {

    this.playService.changeLobbyState(false)

  }



  openRoleSelect() {

    if(this.inQueue == false) {

      document.getElementById('roleSelect').style.display = 'block'

    }

  }



  selectRole(role) {

      this.roleSelected = role
      document.getElementById('roleSelect').style.display = 'none'

  }

}
