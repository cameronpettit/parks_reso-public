import { Component, OnInit } from '@angular/core';
import { Constants } from '../shared/utils/constants';

@Component({
  selector: 'app-parks-list',
  templateUrl: './parks-list.component.html',
  styleUrls: ['./parks-list.component.scss']
})
export class ParksListComponent implements OnInit {

  public mockParkList = Constants.mockParkList;

  constructor() { }

  ngOnInit(): void {
  }

}
