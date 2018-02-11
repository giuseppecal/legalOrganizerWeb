import {Component, OnInit} from '@angular/core';
import {LastPracticesService} from './last-practices.service';
import {Practice} from '../model/practice';


@Component({
  selector: 'app-last-practices',
  templateUrl: './last-practices.component.html',
  styleUrls: ['./last-practices.component.css']
})
export class LastPracticesComponent implements OnInit {
  practices: Practice[];
  title2 : 'Ultime modifiche';

  ngOnInit(): void {
    this.getLastPractices();
  }

  constructor(public lastPracticesService: LastPracticesService) {
  }

  getLastPractices(): void {
    this.lastPracticesService.getLastPractices()
      .subscribe(practices => this.practices = practices);
  }
}
