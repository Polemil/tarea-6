import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'introname',
    loadComponent: () => import('./introname/introname.page').then( m => m.IntronamePage)
  },
  {
    path: 'introfoto',
    loadComponent: () => import('./introfoto/introfoto.page').then( m => m.IntrofotoPage)
  },
  {
    path: 'introname',
    loadComponent: () => import('./introname/introname.page').then( m => m.IntronamePage)
  },
  {
    path: 'vistaedad',
    loadComponent: () => import('./vistaedad/vistaedad.page').then( m => m.VistaedadPage)
  },
  {
    path: 'vistapais',
    loadComponent: () => import('./vistapais/vistapais.page').then( m => m.VistapaisPage)
  },
  {
    path: 'vistaclima',
    loadComponent: () => import('./vistaclima/vistaclima.page').then( m => m.VistaclimaPage)
  },
  {
    path: 'vistanoticia',
    loadComponent: () => import('./vistanoticia/vistanoticia.page').then( m => m.VistanoticiaPage)
  },
  {
    path: 'acerca',
    loadComponent: () => import('./acerca/acerca.page').then( m => m.AcercaPage)
  },
  {
    path: 'vistalogo',
    loadComponent: () => import('./vistalogo/vistalogo.page').then( m => m.VistalogoPage)
  },
];
