import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  airports = [
    {
      'city': 'London',
      'background': 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'Atlanta',
      'background': 'https://alumni.uga.edu/wp-content/uploads/atlanta-1.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'New York',
      'background': 'https://www.jetblue.com/img/vacations/destination/NewYorkSkyline_960x420.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'Amsterdam',
      'background': 'https://www.motel-one.com/fileadmin/_processed_/csm_Amsterdam_Stadtseite_Header_6f2b8b06fd.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'London',
      'background': 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'London',
      'background': 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'London',
      'background': 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'London',
      'background': 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
      'bounds': {
        'northeast': {
          'lat': 51.672343, 'lng': 0.148271
        }, 'southwest': {
          'lat': 51.384940, 'lng': -0.351468
        }
      }
    },
    {
      'city': 'London',
      'background': 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
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
