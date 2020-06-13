import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule, routingComponents } from './routing.module';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './services/auth-service/auth.service';
import { AdminAuthGuard } from './auth/adminauth.guard';
import { AdminauthService } from './services/adminauth-service/adminauth.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, AdminAuthGuard, AdminauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
