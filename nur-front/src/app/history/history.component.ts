import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {IHistory} from '../shared/models/IHistory';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public histories: IHistory[] = [];
  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getHistory().then(res => {
      this.histories = res;
    });
  }

}
