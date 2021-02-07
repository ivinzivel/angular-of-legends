import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champion-select',
  templateUrl: './champion-select.component.html',
  styleUrls: ['./champion-select.component.scss']
})
export class ChampionSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  teste() {

    this.router.navigateByUrl('client/home')

  }

}
