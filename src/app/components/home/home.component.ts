import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public profile: Profile = {
    born_city: "",
    born_year: 0,
    current_city: "",
    img_profile: "",
    name: "",
    phone_number: ""
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection('profile').subscribe((data: Profile) => this.profile = data);
    // Define the new element
    //window.customElements.define('popup-info', PopUpInfo);
  }
}


// Create a class for the element
// export class PopUpInfo extends HTMLElement {
//   constructor() {
//     // Always call super first in constructor
//     super();

//     // Create a shadow root
//     const shadow = this.attachShadow({ mode: 'open' });

//     // Create spans
//     const wrapper = document.createElement('span');
//     wrapper.setAttribute('class', 'wrapper');
//     wrapper.textContent = 'Sha Dow';

//     const info = document.createElement('span');
//     info.setAttribute('class', 'info');

//     // Take attribute content and put it inside the info span
//     const text = this.getAttribute('data-text');
//     info.textContent = text;

//     // Create some CSS to apply to the shadow dom
//     const style = document.createElement('style');
//     console.log(style.isConnected);

//     style.textContent = `
//       .wrapper {
//         position: relative;
//       }

//       .info {
//         font-size: 0.8rem;
//         width: 200px;
//         display: inline-block;
//         border: 1px solid black;
//         padding: 10px;
//         background: white;
//         border-radius: 10px;
//         opacity: 0;
//         transition: 0.6s all;
//         position: absolute;
//         bottom: 20px;
//         left: 10px;
//         z-index: 3;
//       }     
//     `;

//     // Attach the created elements to the shadow dom
//     shadow.appendChild(style);
//     console.log(style.isConnected);
//     shadow.appendChild(wrapper);
//     wrapper.appendChild(info);
//   }
// }


