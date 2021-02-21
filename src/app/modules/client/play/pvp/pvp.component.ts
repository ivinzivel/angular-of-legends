import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../background.service';
import { SoundService } from '../../sound.service';

@Component({
  selector: 'app-pvp',
  templateUrl: './pvp.component.html',
  styleUrls: ['./pvp.component.scss']
})
export class PvpComponent implements OnInit {

  gameMode: number = 1

  constructor(private backgroundService: BackgroundService) {

    this.backgroundService.changeBackground({ 
      backgroundUrl: 'https://images2.alphacoders.com/913/thumb-1920-913622.jpg',
      backgroundSize: '150%',
      backgroundPosition: 'top'
    })

  }

  ngOnInit(): void {

    setTimeout( () => { 
      
      document.getElementById('sr').style.opacity = '1' 
    
        setTimeout( () => { 
        
          document.getElementById('aram').style.opacity = '1' 

          setTimeout( () => { 
        
            document.getElementById('tft').style.opacity = '1' 
          
            setTimeout( () => { 
        
              document.getElementById('urf').style.opacity = '1' 
            
            }, 200 )

          }, 200 )
        
        }, 200 )

    }, 200 )

  }

}
