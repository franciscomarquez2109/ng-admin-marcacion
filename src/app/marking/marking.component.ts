import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location/location.service';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-marking',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './marking.component.html',
  styleUrl: './marking.component.scss'
})
export class MarkingComponent implements OnInit{
  public latitude:string | undefined;
  public longitude:string | undefined;

  constructor(
    private servicesLocation: LocationService,
    private servicesLogin: LoginService
  ){}

  ngOnInit(): void {

  }

  getLocation(){
    this.servicesLocation.getLocation()
    .then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;

      this.servicesLocation.saveMarking(this.servicesLogin.getIdUserStorage(),this.longitude+','+this.latitude).subscribe(resp=>{
        console.log(resp);
      })
    });
  }

}
