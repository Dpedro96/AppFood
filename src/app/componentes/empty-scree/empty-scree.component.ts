import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-scree',
  templateUrl: './empty-scree.component.html',
  styleUrls: ['./empty-scree.component.scss'],
})
export class EmptyScreeComponent  implements OnInit {
  @Input() model:any;

  constructor() { }

  ngOnInit() {}

}
