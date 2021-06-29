import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { cold } from 'jest-marbles';

import { AppTitleService } from './app-title.service';

describe('AppTitleService', () => {
  let service: AppTitleService;
  let titleMock: { setTitle: jest.Mock<any, any>, getTitle: jest.Mock<any, any> };

  beforeEach(() => {
    titleMock = { setTitle: jest.fn(), getTitle: jest.fn(() => 'default title') };
    TestBed.configureTestingModule({
      providers:[
        AppTitleService,
        {provide: Title, useValue: titleMock }
      ]
    });
    service = TestBed.inject(AppTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update title in browser', () => {
    service.setTitle('a new title');
    expect(titleMock.setTitle).toHaveBeenCalledWith('a new title');
  })

  it('should emit default title', () => {
    expect(service.title$).toBeObservable(cold('a', {a: 'default title'}));
  });

  it('should emit default title and the new title', () => {
    service.setTitle('a new title');    
    expect(service.title$).toBeObservable(cold('a', {a: 'a new title'}));
  });
});
