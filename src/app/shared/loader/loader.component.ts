import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() bgColor: string = 'bg-primary';

  constructor() { }

  ngOnInit(): void {
  }

}
