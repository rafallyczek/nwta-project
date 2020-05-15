import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookFormComponent } from './pages/books/book-form/book-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent},
  { path: 'addBook', component: BookFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutingModule { }

export const routingComponents = [
  HomeComponent,
  BooksComponent,
  BookFormComponent
]
