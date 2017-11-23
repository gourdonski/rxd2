import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/take';

import { BungieApiService } from '../../bungie';
import { BungieMembershipType, DestinyPlayer, HelperService, PlayerSearch, SelectOption } from '../../shared';
import { DestinyPlayerState, SearchAction } from '../../store';

@Component({
  selector: 'player-search',
  templateUrl: './player-search.component.html'
})
export class PlayerSearchComponent implements OnInit {
  private membershipTypes: SelectOption[];

  private destinyPlayer$: Observable<DestinyPlayer>;

  playerSearchForm: FormGroup;

  constructor(private apiService: BungieApiService, private formBuilder: FormBuilder, private helper: HelperService, private store: Store<DestinyPlayerState>) { }

  ngOnInit() {
    this.membershipTypes = this.helper
      .getEnumKeys(BungieMembershipType)
      .map((key: string) => (new SelectOption(BungieMembershipType[key], key)));

    this.destinyPlayer$ = this.store.select(state => state.destinyPlayer);

    this.destinyPlayer$.subscribe(console.log);

    this.playerSearchForm = this.formBuilder.group({
      displayName: [ '', Validators.required ],
      membershipType: [ '', Validators.required ]
    });
  }

  search() {
    const playerSearch: PlayerSearch = this.playerSearchForm.value;

    this.store.dispatch(new SearchAction(new PlayerSearch(playerSearch.displayName, playerSearch.membershipType)));
  }
}