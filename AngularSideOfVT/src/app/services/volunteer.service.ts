import { Volunteer } from './../models/volunteer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {NgForm} from "@angular/forms";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
   // Fields
   //private url = '/VolunteerTracker/';
   //private urlPath = 'api/volunteer';
   private baseUrl = environment.baseUrl + 'api/volunteer';
   //private baseUrl = this.url + this.urlPath;
   //private baseUrl = 'http://localhost:8090/api/volunteer';

   
   // Constructor 

  constructor(private http : HttpClient) { }

    // Methods

    index(){
      return this.http.get<Volunteer[]>(this.baseUrl)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in Vol Service.index()');
        })
      );
      return ;
    }
    create (vol: Volunteer){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post(this.baseUrl, vol, httpOptions)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('Error in Vol Service.create()');
          })
        ); 
    }
    update(vol: Volunteer){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type' : 'application/json'
        })
      };
      return this.http.put(this.baseUrl + '/' + vol.id, vol, httpOptions)
      .pipe(
        catchError(( err: any) => {
          console.log(err);
          return throwError('Error in volServ.update');
        })
      ); 
    }
    destroy(id){
      return this.http.delete(this.baseUrl + '/' + id)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('Error in volServ.delete()');
          })
        );
    }
    
}
