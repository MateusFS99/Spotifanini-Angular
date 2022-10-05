import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './shared/player/player.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MusicsComponent } from './musics/musics.component';
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  declarations: [					
    AppComponent,
      PlayerComponent,
      SidebarComponent,
      MusicsComponent,
      ArtistsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
