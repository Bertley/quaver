import {Component, OnInit, Input} from '@angular/core';
import {Song} from '../song';
import {CommsService} from '../../comms.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  @Input() song: Song[];
  songSelected = '';

  constructor(private comms: CommsService) {
  }

  ngOnInit() {
    this.comms.songSelected.subscribe(data => this.songSelected = data);
  }

  onSelection(selected: string) {
    this.comms.selected('song', selected);
  }

}
