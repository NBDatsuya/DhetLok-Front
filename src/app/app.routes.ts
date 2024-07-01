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
      }
    ]
  }
];
