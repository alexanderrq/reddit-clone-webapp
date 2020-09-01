import { Component, OnInit } from '@angular/core';
import { SubredditModel } from 'src/app/model/subreddit-model';
import { SubredditService } from 'src/app/service/subreddit/subreddit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.css'],
})
export class ListSubredditsComponent implements OnInit {
  subreddits: Array<SubredditModel>;

  constructor(private subredditService: SubredditService) {}

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(
      (data) => {
        this.subreddits = data;
      },
      (error) => {
        throwError(error);
      }
    );
  }
}
