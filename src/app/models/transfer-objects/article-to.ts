import { Article } from '@app-models/data-objects/article-do';

export interface IArticleResponse {
  response: {
    content: {
      webTitle: string;
      webUrl: string;
      webPublicationDate: string;
      fields: {
        byline: string;
        body: string;
        thumbnail: string;
      };
    };
  };
}

export function mapArticle(article: IArticleResponse): Article {
  return {
    title: article.response.content.webTitle,
    body: article.response.content.fields.body,
    byline: article.response.content.fields.byline,
    date: new Date(article.response.content.webPublicationDate),
    url: article.response.content.webUrl,
    thumbnail: article.response.content.fields.thumbnail
  };
}
