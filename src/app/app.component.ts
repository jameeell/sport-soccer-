import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  AffBigNumber(T: any) {
    let Tmax = T[0];
    for (let i = 0; i < T.length; i++) {
      if (T[i] > Tmax) {
        Tmax = T[i];
      }
    }
    return Tmax;

  }
  alertMessage() {
    alert('bnjr')
  }
  alertMessage2(msg: string) {
    alert(msg)
  }

  diplayData(T: any) {
    let msg = "";
    for (let i = 0; i < T.length; i++) {
      msg = msg + T[i] + ":" + T[i].length;
    }
    return msg;
  }

  verifEmail(email: string) {
    let ch = '';
    for (let i = 0; i < email.length; i++) {
      if (email[i] === '@') {
        for (let j = i + 1; j < email.length; j++) {
          ch = ch + email[j];
          if (email[j + 1] === '.') { j = email.length }
        }
      }
    }
    if (ch === "croco-student") { return ("student"); } else if (ch === "croco-prof") { return ("prof"); } else { return ("vérifer SVP"); }

  }

  voyelleConsone(T: any) {
    
    let ch = '';
    for (let i = 0; i < T.length; i++) {
      let voy = 0;
    let cons = 0;
      for (let j = 0; j < T[i].length; j++) {
        if ((T[i][j] == 'a') || (T[i][j] == 'e') || (T[i][j] == 'u') || (T[i][j] == 'i') || (T[i][j] == 'o') || (T[i][j] == 'y')) {
          voy = voy + 1;
        }
        else {
          cons = cons + 1;
        }
      }
      ch = ch + 'mot ' + T[i] +  ' nbre voyelle' + voy + ' nbre de consone ' + cons;
    }
    return ch;
  }
}


