import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {Amount} from '../../model/model'
import {SubjectService} from '../../services/subject.service'
import {PaymentService} from '../../services/payment.service'
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  adForm: FormGroup;
  userForm: FormGroup;
  started: boolean = false;
  Amounts=Amount;

  constructor(private paymentService:PaymentService,private fb: FormBuilder,private subjectService:SubjectService,private router: Router, private route: ActivatedRoute,private _snackBar: MatSnackBar ) {
    this.createFirstForm();
    this.createSecondForm();
  }

  createFirstForm() {
    this.adForm = this.fb.group({
      convert: ['Yes',Validators.required],
      fisrtBudget: [,Validators.required],
    });
  }

  createSecondForm() {
    this.userForm = this.fb.group({
      convert: [,Validators.required],
      fisrtBudget: [,Validators.required],
      fistName: [,Validators.required],
      secondName: [,Validators.required],
      email: [,[Validators.required, Validators.email]],
      secondBudget:[,Validators.required],
      PhoneNo:[,Validators.required]
    });
  }
  getStarted(){
    this.started=true;
    this.userForm.get("convert").setValue(this.adForm.get("convert").value);
    this.userForm.get("fisrtBudget").setValue(this.adForm.get("fisrtBudget").value);
  }

  submit(){
    // console.log(this.userForm)
    this.paymentService.completePayment(this.userForm.value).subscribe(data=>{
      this.subjectService.HoldUserDetails(this.userForm);
      this._snackBar.open("Payment successful","successful", {
        duration: 2000
      });
      this.router.navigate(['']);
    })

  }

  ngOnInit(): void {
  }

}
