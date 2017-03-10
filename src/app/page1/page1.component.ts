import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { AppApiService } from '../app-api.service'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass']
})
export class Page1Component implements OnInit {

  items = []

  constructor( private app: AppService, private api: AppApiService ) { }

  ngOnInit() {
    // ここからサンプル(こんな感じで使う)
    this.app.setTitle('page1');
    this.api.getHNTops().subscribe(
      items => {
        this.items = []
        items = items.slice(0, 30)
        for(let val of items) {
          this.api.getHNItem(val).subscribe(
            item => {
              if(item['type'] == 'story') {
                this.items.push(item)
              }
            },
            error =>  console.error(error) );
        }
      },
      error =>  console.error(error) );
    // ここまでサンプル
  }

}
