import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = "";
  password = "";
  title = '';

  constructor(private auth:AuthService)
  {

  }

  loguj()
  {
    this.auth.login(this.email, this.password).subscribe((e:Response) => {
      
      this.auth.getUser().subscribe( x => {
        console.log(x);
      })
    });
  }
}
