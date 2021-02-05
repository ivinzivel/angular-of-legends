import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../background.service';

@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.scss']
})
export class PatchNotesComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {

    this.backgroundService.changeBackground('')

  }

  ngOnInit(): void {
  }

}
