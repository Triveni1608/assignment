import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIdleKeepaliveModule, Keepalive } from '@ng-idle/keepalive';
import { PostLoginRoutingModule } from './post-login-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from '../loader-interceptor.service';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    PostLoginRoutingModule,
    NgIdleKeepaliveModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  declarations: [HomeComponent, SearchFilterPipe],
  providers: [,{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }]
})
export class PostLoginModule { }
