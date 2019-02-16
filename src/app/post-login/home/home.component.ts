import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { LoaderServiceService } from 'src/app/loader-service.service';
import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*Variable Declaration */
  timedOut = false;
  data = "";
  show = false;
  ipAddress = ""
  private subscription: Subscription;
  searchString = "";
  loginId = localStorage.getItem('loginId')
  @ViewChild('template') template: ModalDirective
  @ViewChild('template1') template1: ModalDirective
  itemList = [{
    firstname: 'f_test',
    lastname: 'l_test',
    email: 'test@gmail.com'
  }, {
    firstname: 'f_test1',
    lastname: 'l_test1',
    email: 'test1@gmail.com'
  },
  {
    firstname: 'f_test2',
    lastname: 'l_test2',
    email: 'tes2t@gmail.com'
  },
  {
    firstname: 'f_test3',
    lastname: 'l_test3',
    email: 'test3@gmail.com'
  }];

  /*Constructor Call */
  constructor(private idle: Idle, private keepalive: Keepalive, private router: Router, private bsmodalservice: BsModalService,
    private http: HttpClient,
    private loaderService: LoaderServiceService
  ) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(60);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(60);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    idle.onTimeout.subscribe(() => {
      this.clearLocaStorage();
    });
    idle.onIdleStart.subscribe(() => this.bsmodalservice.show(this.template));
    this.reset();
  }

  /*Watch the ideal time*/
  reset() {
    this.idle.watch();
  }


  /*Call NgOn Destroy*/
  ngOnDestroy() {
    this.idle.stop();
  }


  /*Logout Method*/
  logout() {
    this.bsmodalservice.show(this.template1)
  }


  /*Clear the localstorage and redirect to login page*/
  clearLocaStorage() {
    this.bsmodalservice.hide(1);
    localStorage.clear();
    this.router.navigate(["/login"]);
  }


  /*Ng On Init Mehtod*/
  ngOnInit() {

  }

  /*Stay Logged In Method*/
  stayLoggedIn() {
    this.keepalive.interval(30)
    this.bsmodalservice.hide(1)
  }

  /*Service call to get IP address */
  getIpAddress() {
    this.loaderService.loaderState
      .subscribe((state) => {
        this.show = state;
      });
    this.getIpAddressAPI().subscribe((response) => {
      this.ipAddress = response.ip;
    })
  }

  /*API call to get IP address */
  getIpAddressAPI(): Observable<any> {
    return this.http.get('https://api.ipify.org/?format=json');
  }
}
