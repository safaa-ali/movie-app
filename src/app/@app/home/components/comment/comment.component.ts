import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from './../../../../@core/data.service';
import { ConnectionService } from './../../../../@core/connection.service';
import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']


})
export class CommentComponent implements OnInit {
  comments: any;
  selectedImage: any;
  url: string | ArrayBuffer;
  commentForm: FormGroup;
  replyForm: FormGroup
  userName: any;
  nameUser: string;
  commentId
  userId: any;
  isReplyHidden = false
  replyBody: any;
  replyImage: any;
  commentObjec: any

  constructor (private _connectionService: ConnectionService, private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      comment: new FormControl(null),
      img: new FormControl(null)
    });

  }
  replyCom:FormControl;
  replyImg: FormControl
  ngOnInit(): void {
    // this.replyForm = this.fb.group({
    //   reply: new FormControl(null),
    //   replyImg: new FormControl(null),
    // })
    this.replyCom = new FormControl(null);
    this.replyImg = new FormControl(null);
    // get all comments from firebase and display it
    this._connectionService.getAll("comments").subscribe((res: any) => {
      let commentData = []
      res.forEach(element => {
        commentData.push({ id: element.payload.doc.id, ...element.payload.doc.data() })
      });
      this.comments = [...commentData]
      console.log(this.comments);

    })


    this.userName = JSON.parse(localStorage.getItem('userInfo'))

    this.nameUser = this.userName[0].fName + " " + this.userName[0].lName;
    this.userId = JSON.parse(localStorage.getItem('satellizer_token'))

  }

  // upload image and onvert it to base64
  uploadImage(event: any) {
    if ((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(event.target.files[0].name)) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.url = reader.result;
        this.commentForm.get('img').setValue(this.url); // when change image value will be updated
        this.replyImg.setValue(this.url); // when change image value will be updated

      }
    }
  }
  // to send and save comment in firease
  onSubmit(form) {
    if (this.userName) {
      const commentdata = {
        userid: this.userId,
        comment: this.commentForm.get('comment').value,
        img: this.commentForm.get('img').value,
        username: this.nameUser,
        commentid: uuid(),
        reply: []

      };

      //  this._connectionService.post('comments',commentdata)
      this._connectionService.create(commentdata, 'comments').then(re => {
        console.log(re);

      })
      this.commentForm.reset()
    } else {
      alert('Please login first to can type comment')
    }

  }
  // to display reply box with comment id
  reply(id, itemId) {
    document.getElementById(id).style.display = 'block';
    this._connectionService.getOne(itemId, 'comments').subscribe((res: any) => {

      this.response = res
    })
  }

  response
  onSubmitReply(  id) {
    console.log(this.replyForm);
    // let response;
    // this._connectionService.getOne(id, 'comments').subscribe((res: any) => {
    //   response = res
    // })


    setTimeout(() => {
      console.log(this.response, id);

      this.response['id'] =id;
      const replayData = {
        reply:  this.replyCom.value,
        replyImg: this.replyImg.value,
        commentId: uuid(),
        userid: this.userId,
usernameReply:this.nameUser
      }
      if (this.response?.reply) {
        this.response.reply.push({...replayData})
      }
      else {
        this.response.reply = [{...replayData}]
      }
      this._connectionService.updateO(this.response, 'comments')
    }, 100);
  
    document.getElementById(id).style.display = 'none'
  }

}

