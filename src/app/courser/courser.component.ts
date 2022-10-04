import { provideCloudflareLoader } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {product} from '../../model/datainterface';


@Component({
  selector: 'app-courser',
  templateUrl: './courser.component.html',
  styleUrls: ['./courser.component.css']
})
export class CourserComponent  {
 arr:product[]=[];
 constructor(){
 let p:product ={
  id:23,
  title:'ggasdasdh',
  price:3030,
  img:'../../assets/img/istockphoto-1141778521-612x612.jpg',
  dis:'hello wfsdh when alsanosey mobile phone '
}
this.arr.push(p);


let p2:product ={
  id:23,
  title:'ggasdasdh',
  price:3030,
  img:'../../assets/img/images (1).jpg',
  dis:'hello wfsdh when alsanosey mobile phone '
}
this.arr.push(p2);
let p3:product ={
  id:23,
  title:'ggasdasdh',
  price:3030,
  img:'../../assets/img/istockphoto-1141778521-612x612.jpg',
  dis:'hello wfsdh when alsanosey mobile phone '
}
this.arr.push(p3);
let p4:product ={
  id:23,
  title:'ggasdasdh',
  price:3030,
  img:'../../assets/img/phones-switch-apps.jpg',
  dis:'hello wfsdh when alsanosey mobile phone '
}
this.arr.push(p4);
 }
}

