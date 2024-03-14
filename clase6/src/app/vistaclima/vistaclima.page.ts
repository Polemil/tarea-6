import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vistaclima',
  templateUrl: './vistaclima.page.html',
  styleUrls: ['./vistaclima.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistaclimaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
