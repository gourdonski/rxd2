import { Component, OnInit } from '@angular/core';

import { BungieApiService } from '../../bungie';
import { BungieMembershipType, HelperService } from '../../shared';

@Component({
  selector: 'player-search',
  templateUrl: './player-search.component.html'
})
export class PlayerSearchComponent implements OnInit {
  private membershipTypes: { name: string, value: any }[];

  constructor(private apiService: BungieApiService, private helper: HelperService) { }

  ngOnInit() {
    this.membershipTypes = this.helper
      .getEnumKeys(BungieMembershipType)
      .map((key: string) => ({ name: key, value: BungieMembershipType[key] }));
  }
}