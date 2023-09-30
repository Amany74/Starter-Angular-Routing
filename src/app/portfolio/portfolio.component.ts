import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  ImgsSrc:string[]=[
    'assets/poert1.png',
    'assets/port2.png',
    'assets/port3.png',
    'assets/poert1.png',
    'assets/port2.png',
    'assets/port3.png',
  ];

  visible:boolean = true;
  modalSrc:string = '';

  CloseModal(e:any,img:any){
    if(e.target == img){
      return;
    }
    this.visible = true;
  }
}
