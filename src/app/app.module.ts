import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuestionProccessComponent } from './question-proccess/question-proccess.component';
import { TriviaComponent } from './trivia/trivia.component';
import { TriviaApiService } from './trivia-api.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuestionProccessComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TriviaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
