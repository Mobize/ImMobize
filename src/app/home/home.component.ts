import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Property } from '../models/Proporty.model';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  properties: Property[];
  propertiesSubscription: Subscription;

  constructor(private propertiesService: PropertiesService, private router: Router) { }

  ngOnInit() {

    this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (properties: Property[]) => {
        this.properties = properties;
      }
    );
    this.propertiesService.getProperties();
    this.propertiesService.emitProperties();
  }

  onViewProperty(id: number) {
    this.router.navigate(['/property', id]);
  }

  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
  }

}
