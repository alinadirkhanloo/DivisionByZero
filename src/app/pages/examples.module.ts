import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BannerEditorComponent } from './banner-editor/banner-editor.component';
import { BannersComponent } from './banners/banners.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatChip } from '@angular/material/chips';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { EditorComponent } from './editor/editor.component';
import { BlogComponent } from './blog/blog.component';
import { NouisliderModule } from 'ng2-nouislider';
import { BarRatingModule } from 'ngx-bar-rating';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightJsModule } from 'ngx-highlight-js';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TextSelectDirective } from './blog/text-select.directive';
@NgModule({
    imports: [
        BrowserModule,
        BarRatingModule,
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        CKEditorModule,
        JwBootstrapSwitchNg2Module,
        NouisliderModule,


        // MatChip
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        HomeComponent,
        LoginComponent,
        BannerEditorComponent,
        BannersComponent,
        EditorComponent,
        BlogComponent,
        TextSelectDirective
    ],

})
export class ExamplesModule { }
