import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-requests',
  templateUrl: './loading-requests.component.html',
  styleUrls: ['./loading-requests.component.scss'],
})
export class LoadingRequestsComponent  implements OnInit {
  dummmy = Array(5);
  constructor() { }

  ngOnInit() {}

}
