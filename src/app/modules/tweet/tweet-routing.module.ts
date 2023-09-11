import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TweetsComponent } from './pages/tweets/tweets.component';

const routes: Routes = [{ path: 'tweets', component: TweetsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TweetRoutingModule {}
