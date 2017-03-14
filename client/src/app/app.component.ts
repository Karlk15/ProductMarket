import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Welcome to the Market Place';

  constructor(private router: Router) { }


  onClickBack() {
    this.router.navigate(['/sellers']);
  }

}
