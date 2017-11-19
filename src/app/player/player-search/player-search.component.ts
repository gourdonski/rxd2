import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/first';

import { BungieApiService } from '../../bungie';
import { BungieMembershipType, DestinyPlayer, HelperService } from '../../shared';

@Component({
  selector: 'player-search',
  templateUrl: './player-search.component.html'
})
export class PlayerSearchComponent implements OnInit {
  private membershipTypes: { name: string, value: any }[];

  private displayName: FormControl = new FormControl();

  private membershipType: FormControl = new FormControl();

  constructor(private apiService: BungieApiService, private helper: HelperService) { }

  ngOnInit() {
    this.membershipTypes = this.helper
      .getEnumKeys(BungieMembershipType)
      .map((key: string) => ({ name: BungieMembershipType[key], value: key }));
  }

  search() {
    const player = this.apiService
      .getDestinyPlayer(this.membershipType.value, this.displayName.value)
      .first()
      .subscribe((player: DestinyPlayer) => console.log(player));
  }
}