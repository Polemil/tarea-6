import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-introfoto',
  templateUrl: './introfoto.page.html',
  styleUrls: ['./introfoto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class IntrofotoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
