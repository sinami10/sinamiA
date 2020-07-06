import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from 'rxjs';
import {ServiceGalleryService} from '../services/service-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  currentPage:number=1;
  totalRecords:number;
  pagePhotos:any;
  pages:Array<number>=[];
  size:number=10;
  constructor(private serviceGallery:ServiceGalleryService) {
  }
  ngOnInit(): void {
  }

  onSearch(dataForm){
    this.serviceGallery.getData(dataForm).subscribe((data)=>{
      this.pagePhotos=data;
      this.totalRecords=data.total/this.serviceGallery.size ;
      if(data.total % this.size != 0) ++ data.total
      this.pages = new Array<number>(this.totalRecords);
    })
  }
}
