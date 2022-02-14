import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ContentService } from './content.service';

@Injectable()
export class ContentEffects {

  loadContent$ = createEffect(() => this.actions$.pipe(
    ofType('[Content API] Load Labels'),
    mergeMap(() => this.contentService.getContent()
      .pipe(
        map(content => ({ type: '[Content API] Content Loaded Success', content: content })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private contentService: ContentService
  ) {}
}