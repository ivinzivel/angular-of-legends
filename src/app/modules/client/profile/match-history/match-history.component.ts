import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Champions } from 'src/data/champions'
import { Items } from 'src/data/items'
import { Spells } from 'src/data/spells'

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit, AfterViewInit {

  matchs: any = [

    { id: 1, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[0], Items[4], Items[5] ,Items[8] ,Items[3] ,Items[9] ,Items[10] ], trinket: Items[10], score: '11/2/4', cs: 318, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 2, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[1], Items[4], Items[5], Items[7] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '28:20', matchDate: '02/18/2021' },
    { id: 3, status: 'Defeat', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '32:00', matchDate: '02/18/2021' },
    { id: 4, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[126], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[11], Items[13], Items[9] ], trinket: Items[10], score: '11/2/4', cs: 152, gold: 17239, map: "Summoner's Rift", matchDuration: '17:22', matchDate: '02/18/2021' },
    { id: 5, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 6, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '27:00', matchDate: '02/18/2021' },
    { id: 7, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 8, status: 'Defeat', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[52], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[11], Items[17], Items[13], Items[9] ], trinket: Items[10], score: '4/2/4', cs: 178, gold: 15784, map: "Summoner's Rift", matchDuration: '19:22', matchDate: '02/18/2021' },
    { id: 9, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 10, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[126], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[19], Items[13], Items[17], Items[9] ], trinket: Items[10], score: '7/1/9', cs: 201, gold: 22036, map: "Summoner's Rift", matchDuration: '26:13', matchDate: '02/18/2021' },
    { id: 11, status: 'Defeat', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[52], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[11], Items[17], Items[13], Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 12, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 13, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 14, status: 'Defeat', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[126], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[11], Items[13], Items[16],  Items[15],  Items[14], Items[9] ], trinket: Items[10], score: '16/6/12', cs: 268, gold: 30055, map: "Summoner's Rift", matchDuration: '32:47', matchDate: '02/18/2021' },
    { id: 15, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 16, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 17, status: 'Defeat', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 18, status: 'Defeat', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[126], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[11], Items[13], Items[18], Items[9] ], trinket: Items[10], score: '3/7/8', cs: 143, gold: 12369, map: "Summoner's Rift", matchDuration: '22:50', matchDate: '02/18/2021' },
    { id: 19, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' },
    { id: 20, status: 'Victory', gameMode: 'Ranked Solo/Duo', playerChampion: Champions[149], championLevel: 18, spells: [Spells[0], Spells[1]], items: [ Items[2], Items[4], Items[8], Items[6] ,Items[9] ], trinket: Items[10], score: '11/2/4', cs: 400, gold: 36000, map: "Summoner's Rift", matchDuration: '25:00', matchDate: '02/18/2021' }

  ]

  recentlyChampions: any = [

    {champion: Champions[149], percent: 70, winRate: 90},
    {champion: Champions[126], percent: 20, winRate: 52},
    {champion: Champions[52], percent: 10, winRate: 20}

  ]

  recentActivity: any = [

    { id: 1, class: 'fighter', percent: '2' },
    { id: 2, class: 'tank', percent: '2' },
    { id: 3, class: 'mage', percent: '30' },
    { id: 4, class: 'assassin', percent: '70' },
    { id: 5, class: 'support', percent: '2' },
    { id: 6, class: 'marksman', percent: '2' }

  ]

  constructor() { }

  ngOnInit(): void {

    console.log([ Items[0], Items[4], Items[5] ,Items[8] ,Items[3] ])

  }



  ngAfterViewInit(): void {

    setTimeout( () => {

      for( let activity of this.recentActivity ) {

        document.getElementById(activity.class).style.height = `${activity.percent}%`

      }

    }, 0)

  }

}
