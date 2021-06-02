import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../shared/utils/constants';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {

  public park = Constants.mockPark1;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

}
