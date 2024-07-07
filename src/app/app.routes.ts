import {Routes} from '@angular/router';
// 路由列表
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  }, {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent),
  }, {
    path: '',
    loadComponent: () => import('../layouts/main-layout/main-layout.component').then(c => c.MainLayoutComponent),
    children: [
      {
        path: "home",
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
      }, {
        path: "search",
        loadComponent: () => import('./search/search.component').then(c => c.SearchComponent),
      }, {
        path: 'top-list',
        loadComponent: () => import('./top-list/top-list.component').then(c => c.ToplistComponent)
      }, {
        path: 'artist',
        loadComponent: () => import('./artist/artist.component').then(c => c.ArtistComponent)
      }, {
        path: 'collect',
        loadComponent: () => import('./collect/collect.component').then(c => c.CollectComponent)
      }, {
        path: 'genre',
        loadComponent: () => import('./genre/genre.component').then(c => c.GenreComponent)
      }
    ]
  }, {
    path: 'admin',
    loadComponent: () => import('../layouts/admin-layout/admin-layout.component').then(c => c.AdminLayoutComponent),
    children: [
      {
        path: "index",
        loadComponent: () => import('../admin-app/index/index.component').then(c => c.IndexComponent)
      }, {
        path: "song",
        loadComponent: () => import('../admin-app/song/song.component').then(c => c.SongComponent)
      }, {
        path: "artist",
        loadComponent: () => import('../admin-app/artist/artist.component').then(c => c.ArtistComponent)
      },
    ]
  }
];
