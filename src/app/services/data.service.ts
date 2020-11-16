import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let matches = [
      { id: 1, teamOne: 'ca', teamTwo: 'est',scoreOne:2,scoreTwo:0, yellowCards: 5, offSide: 2, logo1: 'assets/images/logo_1.png', logo2: 'assets/images/logo_2.png' },
      { id: 2, teamOne: 'ca', teamTwo: 'est',scoreOne:2,scoreTwo:0, yellowCards: 2, offSide: 0, logo1: 'assets/images/logo_1.png', logo2: 'assets/images/logo_2.png' },
      { id: 3, teamOne: 'ca', teamTwo: 'est',scoreOne:2,scoreTwo:0, yellowCards: 0, offSide: 1, logo1: 'assets/images/logo_1.png', logo2: 'assets/images/logo_2.png' },
      { id: 4, teamOne: 'ca', teamTwo: 'est',scoreOne:2,scoreTwo:0, yellowCards: 0, offSide: 8, logo1: 'assets/images/logo_1.png', logo2: 'assets/images/logo_2.png' }
    ]

    let allPlayers = [
      { id: 1, name: 'jamel',poids:30, date: '09/10/90', position: 'goal', image: 'assets/images/bg_1.jpg' },
      { id: 2, name: 'fatni',poids:30, date: '09/10/90', position: 'atk', image: 'assets/images/bg_3.jpg' },
      { id: 3, name: 'alllo',poids:30, date: '09/10/90', position: 'goal', image: 'assets/images/bg_2.jpg' },
      { id: 4, name: 'cr7',poids:30, date: '09/10/89', position: 'a.c', image: 'assets/images/bg_2.jpg' }

    ]
    let users = [
      {
        id: 1, firstName: 'jamel', lastName: 'hamdaoui', email: 'ja@gmail.com',
        pwd: 123, confirmPwd: 123, tel: '28313035'
      },
      {
        id: 2, firstName: 'mohamed', lastName: 'fatni', email: 'med@gmail.com',
        pwd: 123, confirmPwd: 123, tel: '28000000'
      },
      {
        id: 3, firstName: 'ala', lastName: 'mazerati', email: 'ala@gmail.com',
        pwd: 123, confirmPwd: 123, tel: '28111111'
      }]
let blog =[
{id:1,name: 'cristo', images:'assets/images/person_1.jpg', lastTeam:'real',salary:'9999£'},
{id:2,name: 'djabo', images:'assets/images/person_2.jpg', lastTeam:'club',salary:'1500£'},
{id:3,name: 'mikari', images:'assets/images/person_3.jpg', lastTeam:'tarachi',salary:'99£'},
{id:4,name: 'thawadi', images:'assets/images/person_4.jpg', lastTeam:'jsk',salary:'199£'}
]


    return { matches, allPlayers, users, blog};

  }
}