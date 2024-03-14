import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vistapais',
  templateUrl: './vistapais.page.html',
  styleUrls: ['./vistapais.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistapaisPage implements OnInit {
  async handleFetch() {}
  constructor() { }
  nombre: string = '';
  ngOnInit() {
  }

}
