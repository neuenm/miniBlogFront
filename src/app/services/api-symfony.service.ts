import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import  'rxjs/add/operator/map' ;




@Injectable()
export class ApiSymfonyService {
  urlApi:string="http://localhost:8000"
  posts:any[]=[];
  operation:any[]=[];
  constructor(private _http:Http) {
    console.log("servicio symfiony OK");
   }

   getPosts(){
     let url= this.urlApi+"/posts"
     return this._http.get( this.urlApi+"/posts")
              .map(res=> Array(res.json().result,res.json().message)  ) //RESULT ES LA PARTE DE LA RESPUESTA DE LA API QUE TRAE LOS DATOS
   }

   postPost(title, description){
     let url= this.urlApi+"/admin/posts/create"
     let json=JSON.stringify({
      	title:title,
      	description:description
     });
     let header=new Headers();
     header.append('Content-Type','application/json');
     let paramas= json;
     return this._http.post(url,paramas,{
        headers:header
      })
        .map(res=> res.json().message);
   };

   deletePost(id){
     let url= this.urlApi+"/delete/"+id
     let header=new Headers();
     header.append('Content-Type','application/json');
     return this._http.delete(url,{ headers:header })
        .map(res=> res.json().message) //mesage ES LA PARTE DE LA API QUE TRAE EL ESTADO DE LA OPERACION
     }
}
