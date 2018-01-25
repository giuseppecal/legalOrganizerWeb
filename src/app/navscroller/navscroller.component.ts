import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navscroller',
  templateUrl: './navscroller.component.html',
  styleUrls: ['./navscroller.component.css']
})
export class NavscrollerComponent {

  @Output() newPracticeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  newPractice() {
    this.newPracticeEvent.emit();
  }
}
