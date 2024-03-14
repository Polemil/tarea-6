import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-introname',
  templateUrl: './introname.page.html',
  styleUrls: ['./introname.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]

})

export class IntronamePage implements OnInit {
  constructor() { }
  nombre: string = '';
  genero: string = '';
  predictedColor = 'gray';

  ngOnInit() {

  }


  async handleFetch() {


    try {
      if (this.nombre.trim() === '') {
        console.error('Nombre vacío.');
        return;
      }

      const apiUrl = `https://api.genderize.io/?name=${this.nombre}`;
      const response = await fetch(apiUrl);
      const data = await response.json()


      if (data.gender) {
        this.genero = data.gender;
        this.predictedColor = data.gender === 'male' ? 'blue' : 'pink';
      } else {
       
        console.error('Gender data not found in response');
      }
    } catch (err) {
      console.error('Error fetching gender:', err);
     
    }
  }
}

