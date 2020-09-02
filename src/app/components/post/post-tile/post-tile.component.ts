import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/model/post-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/service/post/post.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
})
export class PostTileComponent implements OnInit {
  @Input() posts: Array<PostModel>;
  faComments = faComments;

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        throwError(error);
      }
    );
  }

  ngOnInit(): void {}

  goToPost(postId: number): void {
    this.router.navigateByUrl('/view-post/' + postId);
  }
}
