import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubredditModel } from 'src/app/model/subreddit-model';
import { Router } from '@angular/router';
import { SubredditService } from 'src/app/service/subreddit/subreddit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css'],
})
export class CreateSubredditComponent implements OnInit {
  createSubredditForm: FormGroup;
  subredditModel: SubredditModel;
  title: FormControl;
  description: FormControl;

  constructor(
    private router: Router,
    private subredditService: SubredditService
  ) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.subredditModel = {
      name: '',
      description: '',
    };
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  discard(): void {
    this.router.navigateByUrl('/');
  }

  createSubreddit(): void {
    this.subredditModel.name = this.createSubredditForm.get('title').value;
    this.subredditModel.description = this.createSubredditForm.get(
      'description'
    ).value;

    this.subredditService.createSubreddit(this.subredditModel).subscribe(
      (data) => {
        this.router.navigateByUrl('/list-subreddits');
      },
      (error) => {
        throwError(error);
      }
    );
  }
}
