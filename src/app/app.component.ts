import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }

  onButtonClick() {
    this.password = 'my password';
  }
}
