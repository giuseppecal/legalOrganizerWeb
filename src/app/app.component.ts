import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private showLastPractice = true;
  @Input() showPractice: boolean;

  showNewPractice() {
    this.showPractice = true;
    this.showLastPractice = false;
  }
}
