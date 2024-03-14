import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vistalogo',
  templateUrl: './vistalogo.page.html',
  styleUrls: ['./vistalogo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistalogoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
