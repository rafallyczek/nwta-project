import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookFormComponent } from './pages/books/book-form/book-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './auth/adminauth.guard';
import { BookEditComponent } from './pages/books/book-edit/book-edit.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'addBook', canActivate:[AuthGuard], component: BookFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit', canActivate:[AuthGuard], component: BookEditComponent},
  { path: 'users', canActivate:[AdminAuthGuard], component: UsersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }

export const routingComponents = [
  HomeComponent,
  BooksComponent,
  BookFormComponent,
  RegisterComponent,
  LoginComponent,
  BookEditComponent,
  UsersComponent
]
