import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/layout/home/home.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { CreateSubredditComponent } from './components/subreddit/create-subreddit/create-subreddit.component';
import { ListSubredditsComponent } from './components/subreddit/list-subreddits/list-subreddits.component';
import { ViewPostComponent } from './components/post/view-post/view-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
  },
  {
    path: 'create-subreddit',
    component: CreateSubredditComponent,
  },
  {
    path: 'list-subreddits',
    component: ListSubredditsComponent,
  },
  {
    path: 'view-post/:postId',
    component: ViewPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
