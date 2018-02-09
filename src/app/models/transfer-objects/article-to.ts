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
