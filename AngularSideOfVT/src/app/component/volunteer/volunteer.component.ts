import { Volunteer } from './../../models/volunteer';
import { VolunteerService } from './../../services/volunteer.service';
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  // Fields
  newVol : Volunteer = new Volunteer();
  selected: Volunteer = null;
  title = 'Volunteer Tracker';
  vols: Volunteer[] = [];
  editVol: Volunteer = null;
  createVol: Volunteer = null;
  start = null;
  addNew = null;
  
  // Constructor

  constructor(private volServ : VolunteerService) {

   }

  // Methods

  ngOnInit() {
    this.start = true;
    this.reload();
  }
  getVolCount(): number {
    let result =0;
    for(let i=0; i<this.vols.length; i++){
      if(this.vols[i].active == true){
        result++;
      }
    } return result;
   // return this.vols.length;
  }
  reload(){
    this.volServ.index().subscribe(
      data => {this.vols = data},
      err => { console.error('Reload got an error: ' + err);}
    );
  }
  displayTable() {
    this.selected = null;
    this.addNew = null;
    this.start = true;
  }
  displayVolunteer(vol: Volunteer) {
    this.selected = vol;
    this.start = null;
  }

  addNewVol() {
    this.volServ.create(this.newVol).subscribe(
      data => {
        this.newVol = new Volunteer();
        this.reload();
      },
      err => {
        console.error('Error in vol add new' + err);
      }
    );
    this.start = true;
    this.addNew = null;
  }
  updateVol() {
    this.volServ.update(this.editVol).subscribe(
      data => {
        this.reload();
      },
      err => {
        console.error('Error in vol component update' + err);
      }
    );
    this.start = true;
    this.editVol = null;
    this.selected = null;
  }
  setEditVol() {
    this.editVol = Object.assign({}, this.selected);
  }
  
  deleteVol(id: number) {
    this.volServ.destroy(id).subscribe(
      data => {
        this.reload();
      },
      err => {
        console.error('Error in vol componenet.delete' + err);
      }
    );
    this.start = true;
    this.selected = null;
  }
  toggle() {
    this.addNew = true;

  }
  // toggle(){
  //   this.show = !this.show;
  //  // this.show = this.newVol;
  // }
 // show: Volunteer = null;
 // show: boolean = false;
//show: Volunteer=null;
 

}
