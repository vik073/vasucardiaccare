import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { EmailService } from 'src/app/modules/appointmentpage/Services/email.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/modules/appointmentpage/dialog/dialog.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})


export class ContactusComponent implements OnInit {
  profileForm: any;
  @Input() mobileview: any;
  @Input() halfview : any;

  
  constructor( private dialog:MatDialog, private fb: FormBuilder , private email:EmailService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required , phoneNumberValidator, Validators.maxLength(10) , Validators.pattern('[1-9]{1}[0-9]{9}')]),
      age: new FormControl('', [Validators.required , Validators.maxLength(3), phoneNumberValidator ])
    });
  }
  get f() 
  { return this.profileForm.controls; }

  onSubmit(){
    this.email.sendContactEmail(this.profileForm.controls.fullName.value,this.profileForm.controls.mobileNumber.value,this.profileForm.controls.age.value).subscribe( res =>{

      if(res){
        this.openDialog();
      }
    });
    
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  

}
export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}

