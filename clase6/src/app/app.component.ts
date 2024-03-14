import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, personOutline, personSharp, fishOutline, fishSharp, thunderstormOutline, thunderstormSharp, trashOutline, trashSharp, callOutline, callSharp, mapOutline, mapSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/introfoto', icon: 'mail' },
    { title: 'Masc o Fem', url: '/introname', icon: 'person' },
    { title: 'Predice edad', url: '/vistaedad', icon: 'fish' },
    { title: 'Pais', url: '/vistapais', icon: 'map' },
    { title: 'Clima', url: '/vistaclima', icon: 'thunderstorm' },
    { title: 'Logo', url: '/vistalogo', icon: 'warning' },
    { title: 'Contratame', url: '/acerca', icon: 'call' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline, mailSharp, personOutline, personSharp, fishOutline, fishSharp, thunderstormOutline, thunderstormSharp, trashOutline, trashSharp, callOutline, callSharp, mapOutline, mapSharp });
  }
}
