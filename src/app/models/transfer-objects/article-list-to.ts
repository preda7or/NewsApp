
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
