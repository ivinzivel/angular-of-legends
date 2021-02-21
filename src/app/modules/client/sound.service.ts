import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  path: string = '../../../assets/sounds/'

  playButtonHover = new Audio(`${this.path}button-play-hover.mp3`)
  playButtonClick = new Audio(`${this.path}button-play-click.mp3`)
  menuClick = new Audio(`${this.path}menu-click.mp3`)
  submenuClick = new Audio(`${this.path}submenu-click.mp3`)
  confirmButtonHover = new Audio(`${this.path}confirm-button-hover.mp3`)
  confirmButtonClick = new Audio(`${this.path}confirm-button-click.mp3`)
  confirmButtonCancelClick = new Audio(`${this.path}confirm-button-cancel-click.mp3`)
  lobbyIntro = new Audio(`${this.path}lobby-intro.mp3`)
  changeGameModeButtonHover = new Audio(`${this.path}change-game-mode-button-hover.mp3`)
  changeGameModeButtonClick = new Audio(`${this.path}change-game-mode-button-click.mp3`)
  roleSelectButtonClick = new Audio(`${this.path}role-select-button-click.mp3`)
  roleSelectButtonLaneHover = new Audio(`${this.path}role-select-button-lane-hover.mp3`)
  roleSelectButtonLaneClick = new Audio(`${this.path}role-select-button-lane-click.mp3`)
  findMatchButtonHover = new Audio(`${this.path}find-match-button-hover.mp3`)
  findMatchButtonClick = new Audio(`${this.path}find-match-button-click.mp3`)
  matchFound = new Audio(`${this.path}match-found.mp3`)
  matchFoundAcceptButtonClick = new Audio(`${this.path}match-found-accept-button-click.mp3`)
  matchFoundDeclineButtonClick = new Audio(`${this.path}match-found-decline-button-click.mp3`)
  championSelectIntro = new Audio(`${this.path}champion-select-intro.mp3`)
  championSelectChampionsVisible = new Audio(`${this.path}champion-select-champions-visible.mp3`)
  championSelectChampionsFilter = new Audio(`${this.path}champion-select-champions-filter.mp3`)
  championSelectChampionHover = new Audio(`${this.path}champion-select-champion-hover.mp3`)
  championSelectChampionClick = new Audio(`${this.path}champion-select-champion-click.mp3`)
  championSelectBanIntro = new Audio(`${this.path}champion-select-ban-intro.mp3`)
  championSelectBan = new Audio(`${this.path}champion-select-ban.mp3`)
  championSelectBanReviewIntro = new Audio(`${this.path}champion-select-ban-review-intro.mp3`)
  championSelectPickIntro = new Audio(`${this.path}champion-select-pick-intro.mp3`)
  championSelectPick = new Audio(`${this.path}champion-select-pick.mp3`)
  championSelectLoadoutIntro = new Audio(`${this.path}champion-select-loadout-intro.mp3`)
  championSelectTimer = new Audio(`${this.path}champion-select-timer.mp3`)
  championSelectTimerCount = new Audio(`${this.path}champion-select-timer-count.mp3`)
  pickPeriodIntro = new Audio(`${this.path}pick-period-intro.mp3`)
  khazix = new Audio(`${this.path}khazix.mp3`)
  tf = new Audio(`${this.path}tf.mp3`)
  zed = new Audio(`${this.path}zed.mp3`)

  constructor() { }



  playSound(sound) {

    this[sound].play()

  }



  pauseSound(sound) {

    this[sound].pause()
    this[sound].currentTime = 0

  }

}
