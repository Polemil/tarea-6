import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vistanoticia',
  templateUrl: './vistanoticia.page.html',
  styleUrls: ['./vistanoticia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VistanoticiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
