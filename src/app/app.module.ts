import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoComponent } from './two/two.component';

export const appRouter: Routes = [
  {path: '', component: OneComponent},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: '**', component: OneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(appRouter),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
