import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component'
import{ PostComponent } from './components/post/post.component'
const app_routes: Routes = [
  { path: 'posts', component: ListComponent },
  { path: 'admin/post/create', component: PostComponent},
  { path: '', pathMatch: 'full', redirectTo: 'posts' }
];

export const app_routing = RouterModule.forRoot(app_routes);
