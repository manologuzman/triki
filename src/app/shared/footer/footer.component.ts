import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  fecha = 0;

  constructor() {
    var f = new Date();
    this.fecha = f.getFullYear();
  }

  ngOnInit(): void {
  }

}
