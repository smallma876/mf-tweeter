import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetsComponent } from './pages/tweets/tweets.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TweetRoutingModule } from './tweet-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TweetsComponent],
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    TweetRoutingModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class TweetModule {}
