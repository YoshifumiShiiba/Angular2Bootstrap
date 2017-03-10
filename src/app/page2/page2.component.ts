import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { AppModule } from '../app.module'

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.sass']
})
export class Page2Component implements OnInit {

  constructor(private app: AppService) {
  }
  ngOnInit() {
    this.app.setTitle('page2')
  }

}
