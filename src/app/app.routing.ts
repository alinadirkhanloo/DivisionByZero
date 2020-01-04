import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './pages/login/login.component';
import { BannerEditorComponent } from './pages/banner-editor/banner-editor.component';
import { BannersComponent } from './pages/banners/banners.component';
import { EditorComponent } from './pages/editor/editor.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent , canActivate: [AuthGuardService]},
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'banner-editor', component: BannerEditorComponent, canActivate: [AuthGuardService] },
  { path: 'banners', component: BannersComponent, canActivate: [AuthGuardService] },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuardService] },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }
