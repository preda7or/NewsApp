import { ArticleList } from '@app-models/data-objects/article-list-do';

export interface IArticleListResponse {
  response: {
    results: Array<{
      id: string;
      webPublicationDate: string;
      webTitle: string;
      webUrl: string;
    }>;
  };
}

export function mapArticleList(articles: IArticleListResponse): ArticleList {
  return articles.response.results.map(a => {
    return {
      // id: encodeURIComponent(a.id),
      id: a.id,
      url: a.webUrl,
      title: a.webTitle,
      date: Date.parse(a.webPublicationDate)
    };
  });
}
