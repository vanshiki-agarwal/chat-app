import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ForgetComponent } from '../components/forget/forget.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'forget',
    component: ForgetComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
