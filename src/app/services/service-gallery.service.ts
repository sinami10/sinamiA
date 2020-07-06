import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGalleryService {
  currentPage:number=1;
  size:number=10;
  constructor(private http:HttpClient) {
  }
  getData(dataForm):Observable<any>{
    const url = "https://pixabay.com/api/?key=17324260-68d19324837365fea6249fee6&q="+dataForm.motCle+"&per_page="+this.size+"&page="+this.currentPage
    return this.http.get<any>(url)
  }
}
