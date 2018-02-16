import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponent } from './articles.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ArticleInputComponent } from '@app-components/article-input/article-input.component';
import { ListComponent } from '@app-components/articles/list/list.component';
import { ArticleComponent } from '@app-components/articles/article/article.component';
import { EscapePipe } from '@app-pipes/escape.pipe';
import { BigthumbPipe } from '@app-pipes/bigthumb.pipe';
import { ReprocessPipe } from '@app-pipes/reprocess.pipe';
import { ArticlesService } from '@app-services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { CleanUrlPipe } from '@app-pipes/cleanurl.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';

const articleListResponse = {
  response: {
    status: 'ok',
    userTier: 'developer',
    total: 2011846,
    startIndex: 1,
    pageSize: 10,
    currentPage: 1,
    pages: 201185,
    orderBy: 'newest',
    results: [
      {
        id:
          'australia-news/2018/feb/09/morning-mail-us-kills-more-than-100-assad-fighters-in-syria',
        type: 'article',
        sectionId: 'australia-news',
        sectionName: 'Australia news',
        webPublicationDate: '2018-02-08T20:20:36Z',
        webTitle:
          'Morning mail: US kills more than 100 Assad fighters in Syria',
        webUrl:
          'https://www.theguardian.com/australia-news/2018/feb/09/morning-mail-us-kills-more-than-100-assad-fighters-in-syria',
        apiUrl:
          'https://content.guardianapis.com/australia-news/2018/feb/09/morning-mail-us-kills-more-than-100-assad-fighters-in-syria',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id:
          'football/2018/feb/08/facebook-google-netflix-not-ready-to-enter-premier-league-tv-rights-battle',
        type: 'article',
        sectionId: 'football',
        sectionName: 'Football',
        webPublicationDate: '2018-02-08T20:19:39Z',
        webTitle:
          'Facebook, Google and Netflix not ready to enter Premier League TV rights battle',
        webUrl:
          'https://www.theguardian.com/football/2018/feb/08/facebook-google-netflix-not-ready-to-enter-premier-league-tv-rights-battle',
        apiUrl:
          'https://content.guardianapis.com/football/2018/feb/08/facebook-google-netflix-not-ready-to-enter-premier-league-tv-rights-battle',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport'
      },
      {
        id: 'world/2018/feb/08/british-isis-fighters-syria-defence-force',
        type: 'article',
        sectionId: 'world',
        sectionName: 'World news',
        webPublicationDate: '2018-02-08T20:19:05Z',
        webTitle:
          'British Isis fighters known as \'the Beatles\' captured in Syria – reports',
        webUrl:
          'https://www.theguardian.com/world/2018/feb/08/british-isis-fighters-syria-defence-force',
        apiUrl:
          'https://content.guardianapis.com/world/2018/feb/08/british-isis-fighters-syria-defence-force',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'us-news/2018/feb/08/omarosa-manigault-newman-trump-us-tweets',
        type: 'article',
        sectionId: 'us-news',
        sectionName: 'US news',
        webPublicationDate: '2018-02-08T20:05:53Z',
        webTitle: 'Tearful Omarosa fears US \'won\'t be OK\' under Trump',
        webUrl:
          'https://www.theguardian.com/us-news/2018/feb/08/omarosa-manigault-newman-trump-us-tweets',
        apiUrl:
          'https://content.guardianapis.com/us-news/2018/feb/08/omarosa-manigault-newman-trump-us-tweets',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id:
          'football/blog/2018/feb/08/arsene-wenger-arsenal-great-leaders-parodies',
        type: 'article',
        sectionId: 'football',
        sectionName: 'Football',
        webPublicationDate: '2018-02-08T20:00:36Z',
        webTitle:
          'Arsène Wenger gilds gateposts but the Arsenal roof is still leaking | Jonathan Wilson',
        webUrl:
          'https://www.theguardian.com/football/blog/2018/feb/08/arsene-wenger-arsenal-great-leaders-parodies',
        apiUrl:
          'https://content.guardianapis.com/football/blog/2018/feb/08/arsene-wenger-arsenal-great-leaders-parodies',
        isHosted: false,
        pillarId: 'pillar/sport',
        pillarName: 'Sport'
      },
      {
        id:
          'music/2018/feb/08/readers-recommend-share-songs-that-made-you-fall-in-love-with-music',
        type: 'article',
        sectionId: 'music',
        sectionName: 'Music',
        webPublicationDate: '2018-02-08T20:00:36Z',
        webTitle:
          'Readers recommend: share songs that made you fall in love with music',
        webUrl:
          'https://www.theguardian.com/music/2018/feb/08/readers-recommend-share-songs-that-made-you-fall-in-love-with-music',
        apiUrl:
          'https://content.guardianapis.com/music/2018/feb/08/readers-recommend-share-songs-that-made-you-fall-in-love-with-music',
        isHosted: false,
        pillarId: 'pillar/arts',
        pillarName: 'Arts'
      },
      {
        id:
          'politics/2018/feb/08/no-deal-brexit-would-trigger-wave-of-red-tape-for-uk-drivers-and-hauliers',
        type: 'article',
        sectionId: 'politics',
        sectionName: 'Politics',
        webPublicationDate: '2018-02-08T20:00:36Z',
        webTitle:
          'No-deal Brexit would trigger wave of red tape for UK drivers and hauliers',
        webUrl:
          'https://www.theguardian.com/politics/2018/feb/08/no-deal-brexit-would-trigger-wave-of-red-tape-for-uk-drivers-and-hauliers',
        apiUrl:
          'https://content.guardianapis.com/politics/2018/feb/08/no-deal-brexit-would-trigger-wave-of-red-tape-for-uk-drivers-and-hauliers',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id:
          'world/2018/feb/08/spirit-airlines-emotional-support-hamster-flush-toilet-florida',
        type: 'article',
        sectionId: 'world',
        sectionName: 'World news',
        webPublicationDate: '2018-02-08T19:59:03Z',
        webTitle:
          '\'Emotional support hamster\' flushed down toilet after airline says it can\'t fly',
        webUrl:
          'https://www.theguardian.com/world/2018/feb/08/spirit-airlines-emotional-support-hamster-flush-toilet-florida',
        apiUrl:
          'https://content.guardianapis.com/world/2018/feb/08/spirit-airlines-emotional-support-hamster-flush-toilet-florida',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'politics/2018/feb/08/david-davis-eu-bad-faith-punish-brexit',
        type: 'article',
        sectionId: 'politics',
        sectionName: 'Politics',
        webPublicationDate: '2018-02-08T19:48:50Z',
        webTitle:
          'David Davis accuses EU of ‘bad faith’ over plan to punish UK',
        webUrl:
          'https://www.theguardian.com/politics/2018/feb/08/david-davis-eu-bad-faith-punish-brexit',
        apiUrl:
          'https://content.guardianapis.com/politics/2018/feb/08/david-davis-eu-bad-faith-punish-brexit',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id:
          'uk-news/2018/feb/08/time-to-wake-up-gambling-industry-criticised-over-sexism',
        type: 'article',
        sectionId: 'inequality',
        sectionName: 'Inequality',
        webPublicationDate: '2018-02-08T19:45:15Z',
        webTitle: '\'Time to wake up\': gambling industry criticised over sexism',
        webUrl:
          'https://www.theguardian.com/uk-news/2018/feb/08/time-to-wake-up-gambling-industry-criticised-over-sexism',
        apiUrl:
          'https://content.guardianapis.com/uk-news/2018/feb/08/time-to-wake-up-gambling-industry-criticised-over-sexism',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      }
    ]
  }
};

const articleResponse = {
  response: {
    status: 'ok',
    userTier: 'developer',
    total: 1,
    content: {
      id:
        'australia-news/2018/feb/09/morning-mail-us-kills-more-than-100-assad-fighters-in-syria',
      type: 'article',
      sectionId: 'australia-news',
      sectionName: 'Australia news',
      webPublicationDate: '2018-02-08T20:20:36Z',
      webTitle: 'Morning mail: US kills more than 100 Assad fighters in Syria',
      webUrl:
        'https://www.theguardian.com/australia-news/2018/feb/09/morning-mail-us-kills-more-than-100-assad-fighters-in-syria',
      apiUrl:
        'https://content.guardianapis.com/australia-news/2018/feb/09/morning-mail-us-kills-more-than-100-assad-fighters-in-syria',
      isHosted: false,
      pillarId: 'pillar/news',
      pillarName: 'News'
    }
  }
};

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ArticlesComponent,
          ArticleInputComponent,
          ListComponent,
          ArticleComponent,
          EscapePipe,
          BigthumbPipe,
          ReprocessPipe,
          CleanUrlPipe,
          TimeAgoPipe
        ],
        imports: [
          RouterModule.forRoot([{ path: '', component: ArticlesComponent }]),
          HttpClientModule
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ArticlesService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
