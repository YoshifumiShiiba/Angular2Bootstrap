import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppApiService {
  // ここからサンプル(こんな感じで使う)
  urlBase = "https://hacker-news.firebaseio.com/v0"

  constructor(private http: Http) {
  }

  getHNTops(): Observable<number[]> {
    return this.buildGetHttp('/topstories.json')
  }

  getHNItem(id: number): Observable<number[]> {
    return this.buildGetHttp("/item/" + id + ".json")
  }
  // ここまでサンプル

  buildGetHttp(path: string) {
    let headers = new Headers({});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.urlBase + path, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  buildPostHttp(path: string, body: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlBase + path, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
