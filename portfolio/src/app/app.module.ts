import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

//ANGULAR MATERIAL
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

//routing
import appRoutes from './routerConfig';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// core components
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PrototypesComponent } from './components/prototypes/prototypes.component';
import { DesignsComponent } from './components/designs/designs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeComponent,
    ProjectsComponent,
    PrototypesComponent,
    DesignsComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    //ANGULAR MATERIAL
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    //ANGULAR MATERIAL
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
