import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone:true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [RouterOutlet, NavbarComponent],
})
export class MainComponent {

}
