import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  airports = [
    {
      'city': 'London',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    }
  ];

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
