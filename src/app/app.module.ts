import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StoreItemComponent } from './store-item/store-item.component';
import { StoreAreaComponent } from './store-area/store-area.component';
import { CoinAreaComponent } from './coin-area/coin-area.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { UpgradeItemComponent } from './upgrade-item/upgrade-item.component';
import { UpgradeAreaComponent } from './upgrade-area/upgrade-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StoreItemComponent,
    StoreAreaComponent,
    CoinAreaComponent,
    LoginComponent,
    GameComponent,
    UpgradeItemComponent,
    UpgradeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
