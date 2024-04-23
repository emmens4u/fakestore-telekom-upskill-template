import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [AuthComponent, RouterOutlet
  ]
})
export class AuthComponent {

}
