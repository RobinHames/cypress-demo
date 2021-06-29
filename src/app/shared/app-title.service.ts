import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {

  public title$ = new BehaviorSubject<string>(this.titleService.getTitle());

  constructor(private titleService: Title) { }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
    this.title$.next(newTitle);
  }
}
