import { Injectable } from '@angular/core'
import { Title }     from '@angular/platform-browser'

@Injectable()
export class AppService {
  title = ''

  constructor( private titleService: Title ) {
  }
  setTitle( newTitle: string) {
    this.title = newTitle
    this.titleService.setTitle( this.title )
  }

}
