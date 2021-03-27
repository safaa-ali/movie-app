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
  commentForm: FormGroup;
  replyForm:FormGroup
  userName: any;
  nameUser: string;
  commentId
  userId: any;
  isReplyHidden=false
  replyBody: any;
  replyImage: any;
  constructor (private _connectionService: ConnectionService,  private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      comment: new FormControl(null),
      img: new FormControl(null)
    });
    this.replyForm = this.fb.group({
      reply: new FormControl(null),
      replyImg: new FormControl(null),
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
      console.log(this.comments);
      this.commentId=this.comments[0].fireId;

    })


    this.userName = JSON.parse(localStorage.getItem('userInfo'))

    this.nameUser = this.userName[0].fName+ " " + this.userName[0].lName;
    this.userId = JSON.parse(localStorage.getItem('satellizer_token'))

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
        this.replyForm.get('replyImg').setValue(this.url); // when change image value will be updated

      }
    }
  }
  onSubmit(form){
    if(this.userName){
      const commentdata = {
        userid:this.userId,
        comment: this.commentForm.get('comment').value ,
        img: this.commentForm.get('img').value,
        username:this.nameUser,
        commentid:this.commentId,
        replyComment:[{
           reply:this.replyBody,
           replyImg:this.replyImage,
           uidComment:this.commentId,
           userid:this.userId,
          }] ,
      };
      console.log(commentdata);

     this._connectionService.post('comments',commentdata)
     this.commentForm.reset()
    }else{
      alert('Please login first to can type comment')
    }
/**
 * {uidComment:'',
 * commentreply:"",
 * userid:""
 * }
 */

  }

  reply(){
    // let row = document.createElement('div');
    //   row.className = 'row col-lg-8 comment-container';
    //   row.innerHTML = `

    //   // <form [formGroup]="replyForm" (ngSubmit)="onSubmitReply(replyForm)">
    //   //   <div class="heading">
    //   //     <figure class="d-flex">
    //   //       <label for="imgInput">
    //   //         <img class="img"
    //   //           src="./../../../../../assets/images/pngtree-user-vector-avatar-png-image_1541962.jpg"
    //   //         />
    //   //       </label>
    //   //       <input
    //   //         type="file"
    //   //         id="imgInput"
    //   //         class="text-nowrap text-truncate"
    //   //         (change)="uploadImage($event)"
    //   //       />
    //   //     </figure>
    //   //   </div>
    //   //   <div class="text">
    //   //     <textarea
    //   //       formControlName="reply"
    //   //       cols="10"
    //   //       rows="4"
    //   //       class="form-control"
    //   //       placeholder="Your comment here ..."
    //   //     >
    //   //     </textarea>
    //   //   </div>
    //   //   <button type="submit" mdbBtn color="primary" mdbWavesEffect>
    //   //     send reply
    //   //   </button>
    //   // </form>
    // `
    ;
      // document.querySelector('.showInputField').appendChild(row);
      this.isReplyHidden = !this.isReplyHidden
  }
  onSubmitReply(replyForm){

  this.replyBody=  replyForm.value.reply;
  this.replyImage=  replyForm.value.replyImg;

  console.log(this.replyImage," ",this.replyBody);

  }
}

