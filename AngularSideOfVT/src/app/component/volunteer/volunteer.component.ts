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
   editVolunteer: Volunteer;


  // Constructor

  constructor(private volServ : VolunteerService) {

   }

  // Methods

  ngOnInit() {
    this.reload();
  }
  getVolCount(): number {
    return this.vols.length;
  }
  reload(){
    this.volServ.index().subscribe(
      data => {this.vols = data},
      err => { console.error('Reload got an error: ' + err);}
    );
  }
  displayTable() {
    this.selected = null;
  }
  displayVolunteer(vol: Volunteer) {
    this.selected = vol;
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
  }
  updateVol() {
    //this.date();
    this.volServ.update(this.editVolunteer).subscribe(
      data => {
        this.reload();
      },
      err => {
        console.error('Error in vol component update' + err);
      }
    );
  }
  setEditVol() {
    this.editVolunteer = Object.assign({}, this.selected);
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
  }

}
