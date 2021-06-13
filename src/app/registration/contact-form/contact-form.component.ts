import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pass } from 'src/app/models/pass';
import { PassService } from '../../services/pass.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() facilityType;
  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();
  public myForm: FormGroup;
  public iAgree = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      license: new FormControl()
    });
    this.myForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern('^[0-9]{10}$')]],
        license: ['', Validators.required]
      }
    );
  }

  submit() {
    try {
      const postObj = new Pass();
      this.validateFields(postObj);
      this.emitter.emit(postObj);
    } catch (error) {
      alert (`An error occurred: ${error}`);
    }
  }

  private validateFields(obj) {
    //Mandatory fields
    obj.firstName = this.myForm.get('firstName').value;
    obj.lastName = this.myForm.get('lastName').value;
    obj.email = this.myForm.get('email').value;
    obj.phone = this.myForm.get('phone').value;

    //Optional fields
    if (this.myForm.get('license').value){
      obj.licence = this.myForm.get('licence').value;
    } else {
      delete obj.license;
    }
  }

}
