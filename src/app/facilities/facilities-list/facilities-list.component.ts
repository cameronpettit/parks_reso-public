import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './facilities-list.component.html',
  styleUrls: ['./facilities-list.component.scss']
})
export class FacilitiesListComponent implements OnInit {

  public facilities = Constants.mockFacilityList;

  public dateForm = new FormGroup({
    date: new FormControl(new Date(), Validators.required),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }


  passNameConcat(pass): string {
    return String(pass.rowData.name + ' - ' + pass.rowData.time + ' (' + pass.rowData.type + ')');
  }

  navigate(passId) {
    this.router.navigate(['../pass', passId], {relativeTo: this.route});
  }


}
