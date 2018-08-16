import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSUSM';
  titleStyle;

  changeColor(): void {
    if (this.titleStyle === undefined) {
      this.titleStyle = { 'background-color': 'teal' };
    } else {
      this.titleStyle = undefined;
    }
  }
}
