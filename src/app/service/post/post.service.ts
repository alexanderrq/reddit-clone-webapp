import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../../model/post-model';
import { CreatePostPayload } from 'src/app/model/create-post-payload';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<Array<PostModel>> {
    return this.httpClient.get<Array<PostModel>>(
      'http://localhost:8080/api/posts'
    );
  }

  createPost(postPayload: CreatePostPayload): Observable<PostModel> {
    return this.httpClient.post<PostModel>(
      'http://localhost:8080/api/posts/',
      postPayload
    );
  }
}
