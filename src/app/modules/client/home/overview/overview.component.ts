import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../background.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private backgroundService: BackgroundService) {

    this.backgroundService.changeBackground('https://4.bp.blogspot.com/-fXQUf52mB0I/XO98d2WF4ZI/AAAAAAAAGls/P3BtEoQqEoszt_NmeXJxyi2Tx9rB_qJeACKgBGAs/w0/galaxy-slayer-zed-lol-4K-97.jpg')

  }

  ngOnInit(): void {
  }

}
