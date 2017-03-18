import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// State
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  isDarkTheme$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.isDarkTheme$ = this.store.select(fromRoot.getIsDarkTheme);
  }
}
