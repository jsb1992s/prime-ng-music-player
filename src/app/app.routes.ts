import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'track',
        loadComponent: () => import('./pages/track/track.component').then(m => m.TrackComponent)
    },
    {
        path: 'playlist',
        loadComponent: () => import('./pages/playlist/playlist.component').then(m => m.PlaylistComponent)
    },
];
