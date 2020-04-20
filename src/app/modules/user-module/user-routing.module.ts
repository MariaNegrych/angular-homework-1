import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolve/user-resolve.service';


const routes: Routes = [
  {path: '', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
      {path: ':id', loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
