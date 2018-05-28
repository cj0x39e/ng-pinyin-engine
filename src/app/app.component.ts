import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  universityList;
  universityListSearch = '';

  universityAllList;
  universityAllListSearch = '';

  ngOnInit(): void {
    this.universityList = [
      '清华大学',
      '北京大学',
      '中央美院'
    ];

    this.universityAllList = [
      { id: 0, name: '清华大学' },
      { id: 1, name: '北京大学' },
      { id: 3, name: '中央美院' }
    ];
  }
}
