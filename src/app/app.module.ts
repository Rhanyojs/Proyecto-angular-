import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    ToolbarComponent,
    StudentsPageComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
