import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticlesService } from '@app-services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ListComponent, TimeAgoPipe],
        imports: [
          RouterModule.forRoot([{ path: '', component: ListComponent }]),
          HttpClientModule
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ArticlesService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
