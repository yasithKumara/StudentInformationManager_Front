// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { StudentService } from './student.service';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule
//   ],
//   providers: [StudentService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
