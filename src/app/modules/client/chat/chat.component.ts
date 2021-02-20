import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Friends } from 'src/data/friends'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messageForm: FormGroup

  @Input() currentChat: any = {}
  friends: any

  constructor() {

    this.messageForm = new FormGroup({

      message: new FormControl()

    })

  }

  ngOnInit(): void {

    this.friends = Friends

  }



  selectChat(friend) {

    this.currentChat = friend

  }



  sendMessage() {

    if(this.messageForm.value.message !== null) {

      Friends[this.currentChat.id - 1].messages.push({ text: this.messageForm.value.message, type: 'user' })
      this.messageForm.reset()

    }

  }

}
