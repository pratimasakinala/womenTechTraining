import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'week-4',
  templateUrl: './week-4.component.html',
  styleUrls: ['./week-4.component.css']
})
export class Week4Component implements OnInit {
  @Input() day: number;
  @Output() scrolledTo = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.day = params['day'];
    });
  }

  scrollIntoView(event) {
    this.scrolledTo.emit(event);
  }

}