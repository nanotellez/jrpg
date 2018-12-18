import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { CombatScreenComponent } from './combatscreen/combatscreen.component';
import { CombatMonsterSectionComponent } from './combatmonstersection/combatmonstersection.component';
import { CombatPlayerSectionComponent } from './combatplayersection/combatplayersection.component';
import { CombatPlayerHealthSectionComponent } from './combatplayerhealthsection/combatplayerhealthsection.component';
import { CombatLogComponent } from './combatlog/combatlog.component';
import { ChooseCharacterComponent } from './choosecharacter/choosecharacter.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldmapComponent,
    CombatScreenComponent,
    CombatMonsterSectionComponent,
    CombatPlayerSectionComponent,
    CombatPlayerHealthSectionComponent,
    CombatLogComponent,
    ChooseCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
