import { ConnectionService } from './../../../../@core/connection.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements  OnInit{
  favouriteData
  favouriteStuts: boolean;
  id;
  commentForm:FormGroup;
  constructor (
    private actRoute: ActivatedRoute,
    private _connectionService: ConnectionService,
    private fb:FormBuilder
  ) {
    this.id = this.actRoute.snapshot.params['id'];
    console.log(this.id);

    this.actRoute.paramMap.subscribe((params) => {
      const id = +params.get('id');
      console.log(id);

      this._connectionService.getOneMovie(id).subscribe(res => {
        console.log(res);
        this.favouriteData = res
      })

    });
  }
ngOnInit(){
  this.commentForm=this.fb.group({
    comment:'',
    })
}
  sendComment(){


// const commentValue=this.commentForm.get('comment').value;
this._connectionService.post('comment',this.commentForm.value)
this.commentForm.reset()

  }
}
