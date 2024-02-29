import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent  implements OnInit {
  @Input() requests: any;
  constructor() { }

  ngOnInit() {}

  getUnid(unid){
    return unid.join(', ')
  }
}
