import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {


  @Input() public pos = '';

  image = '../../../assets/images/vacio.PNG';
  presion =true;
  juego=['','','','','','','','',''];



  constructor() { }

  ngOnInit(): void {
  }


  changeFicha() {
    if (this.presion){
      this.image = '../../../assets/images/o.PNG'
      this.presion =false;

      this.juego[parseInt(this.pos)]='o';
    }else{
      this.image = '../../../assets/images/x.PNG'
      this.presion =true;
     this.juego[parseInt(this.pos)]='x';
    }     

    console.log(this.pos);

    console.log(this.juego);
   
  }







  





}
