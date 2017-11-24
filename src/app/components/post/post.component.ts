import { Component, OnInit } from '@angular/core';
import { ApiSymfonyService } from "../../services/api-symfony.service"
import { Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any;
  operationState:String;
  title:string="";
  description:string="";

  constructor(private _apiBlog:ApiSymfonyService,
              public _route:Router) { }

  ngOnInit() {
  }
  nuevoPost(){
      this._apiBlog.postPost(this.title, this.description)
      .subscribe(data=>{this.operationState=data
                        console.log(this.operationState)
                        this._route.navigate(['posts']);

                      });

  }
}
