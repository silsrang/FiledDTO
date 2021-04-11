import { Component } from '@angular/core';
import {SubjectService} from 'src/app/services/subject.service'
import {Details} from 'src/app/model/model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DTO';
  Clicked:boolean=false;
  UserDetails:Details;
  userAvail:boolean=false;
  constructor( private subjectService:SubjectService,private router: Router,) {
    this.DisplayUser();
    this.router.navigate(['']);

  }

  DisplayUser(){
    this.subjectService.CastUserDetails.subscribe(data => {
      if(this.Clicked==true){
      this.UserDetails=data.value;
        if(this.UserDetails.fistName!=null){
            this.userAvail=true;
          }
      }
    })
  }

  buttonClicked(){
    this.Clicked=true;
  }

  clearFields(event: boolean){
    if(event==true){
      this.userAvail=false;
      this.Clicked=false;
    }
  

  }
  ngOnDestroy(){
    
  }

}
