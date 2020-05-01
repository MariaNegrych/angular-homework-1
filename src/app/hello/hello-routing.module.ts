import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {UserInfoComponent} from '../modules/user-module/components/user-info/user-info.component';
import {InfoResolverService} from '../modules/user-module/services/user-info-service/info.resolver.service';
import {CanActivateService} from './services/can-activate.service';
import {UserResolverService} from '../modules/user-module/services/user-resolve/user-resolve.service';



// @ts-ignore
const routes: Routes = [
  {path: '', component: HelloComponent, children: [
      // {path: 'info/:id', loadChildren: () => import('../../modules/user-module/user.module').then(m => m.UserModule)}
    {path: 'info/:id',
      component: UserInfoComponent,
      resolve: {userInfo: InfoResolverService},
      canActivate:  [CanActivateService]}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
