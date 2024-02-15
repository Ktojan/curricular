import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  loaded = false;  

  ngOnInit() {
    // mocking loading
    setTimeout(() => this.loaded = true, 955);
  }  
}

