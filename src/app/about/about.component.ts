import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../../service/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   info:{name:string,email:string,tel:string};
   comments=[];
  commentaire={date:null,message:""};
  constructor(private  aboutService:AboutService) {
    this.info=this.aboutService.getInfo();
    this.comments=aboutService.getAllComments();
  }

  ngOnInit(): void {
  }

  onAddCommentaire(c){
      this.aboutService.addComments(c);
      this.commentaire.message="";
      this.comments=this.aboutService.getAllComments();
    }


}
