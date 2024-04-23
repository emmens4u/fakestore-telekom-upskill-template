import { Component, inject, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { debounceTime, tap } from 'rxjs';
import { FilterService } from '../../services/filter/filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public search = new FormControl('');
  private filterService = inject(FilterService);
  private authService = inject(AuthService);

  private setupSearch() {
    this.search.valueChanges
      .pipe(
        debounceTime(800),
        tap((value) => this.filterService.setFilter(value))
      )
      .subscribe();
  }

  public ngOnInit(): void {
    this.setupSearch();
  }

  public Logout(): void {
    this.authService.logoutUser();
  }
}
