import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../../../service/subreddit/subreddit.service';
import { SubredditModel } from '../../../model/subreddit-model';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.css'],
})
export class SubredditSideBarComponent implements OnInit {
  subreddits: Array<SubredditModel>;
  displayViewALl: boolean;

  constructor(private subredditService: SubredditService) {
    this.subreddits = [];
    this.subredditService.getAllSubreddits().subscribe((data) => {
      if (data.length >= 4) {
        this.subreddits = data.splice(0, 3);
        this.displayViewALl = true;
      } else {
        this.subreddits = data;
        this.displayViewALl = false;
      }
    });
  }

  ngOnInit(): void {}
}
