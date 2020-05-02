import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolve/user-resolve.service';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {InfoResolverService} from './services/user-info-service/info.resolver.service';
import {CanActivateService} from '../../hello/services/can-activate.service';


const routes: Routes = [
  {path: '', component: AllUsersComponent, resolve: {users: UserResolverService}, children: [
      {path: ':id', loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)}
    ]},
  // {path: 'info/:id',
  //   component: UserInfoComponent,
  //   resolve: {userInfo: InfoResolverService},
  //   canActivate:  [CanActivateService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
