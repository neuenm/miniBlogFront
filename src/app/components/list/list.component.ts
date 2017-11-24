import { Component, OnInit } from '@angular/core';
import { ApiSymfonyService } from "../../services/api-symfony.service"
import {ReversePipe} from '../../pipes/reverse.pipe'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  operation:any;
  posts:any;
  id:any;
  constructor(private _apiBlog:ApiSymfonyService) { }

  ngOnInit() {
    this._apiBlog.getPosts()
        .subscribe(data=>{this.posts=data[0]
                          console.log(data[1])});
  }

  deletePost(id){
    this._apiBlog.deletePost(id)
      .subscribe(data=>{this.operation=data
                        console.log(data)
                        this._apiBlog.getPosts()
                          .subscribe(data=>{this.posts=data[0]
                                          console.log(data[1])})
                        })
  }
}
