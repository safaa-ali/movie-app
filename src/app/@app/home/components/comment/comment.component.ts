import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from './../../../../@core/data.service';
import { ConnectionService } from './../../../../@core/connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments: any;
  selectedImage: any;
  url: string | ArrayBuffer;
  commentForm: FormGroup
  userName: any;
  nameUser: string;
  constructor (private _connectionService: ConnectionService,  private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      text: new FormControl(null),
      img: new FormControl(null)
    })
  }

  ngOnInit(): void {

    // get all comments from firebase and display it
    this._connectionService.getAll("comments").subscribe((res: any) => {
      let commentData = []
      res.forEach(element => {
        commentData.push({ fireId: element.payload.doc.id, ...element.payload.doc.data() })
      });
      this.comments = [...commentData]
    })


    this.userName = JSON.parse(localStorage.getItem('userInfo'))

    this.nameUser = this.userName[0].fName+ " " + this.userName[0].lName
  }

  // upload image and onvert it to base64
  uploadImage(event: any) {
    if ((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(event.target.files[0].name)) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.url = reader.result;
        console.log(this.url);
        this.commentForm.get('img').setValue(this.url); // when change image value will be updated

      }
    }
  }
  onSubmit(form){
    if(this.userName){
      const commentdata = {
        comment: this.commentForm.get('text').value ,
        img: this.commentForm.get('img').value,
      };
     this._connectionService.post('comments',commentdata)
     this.commentForm.reset()
    }else{
      alert('Please login first to can type comment')
    }


  }
}

