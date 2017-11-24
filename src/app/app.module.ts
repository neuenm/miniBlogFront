import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ListComponent } from './components/list/list.component'
//services
import { ApiSymfonyService } from "./services/api-symfony.service";
//routing
import {app_routing} from "./app.routes"



import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//semantic
import {SuiModule} from 'ng2-semantic-ui';
import { ReversePipe } from './pipes/reverse.pipe';

//paginador
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
    SuiModule,
    NgxPaginationModule

  ],
  providers: [
    ApiSymfonyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
