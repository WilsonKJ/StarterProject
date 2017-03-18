import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';

// NGRX
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

// Components and Containers
import { AppComponent } from './containers/app/app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SampleComponent } from './containers/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterStoreModule.connectRouter()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
