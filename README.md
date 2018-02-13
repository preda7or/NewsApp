# NewsApp

### You can check the working demo at: https://preda7or.github.io/newsapp/

This Angular SPA in its `Articles` section lists the ten latest The Guardian article.

Selecting from the list the app presents the article in more details.

Relying on The Guardian’s API (open-platform.theguardian.com)

The article url input can be used to open the details of a specific The Guardian article.

## Some technical details

The app uses 
- encoded article urls as parameters, child routing and router-outlet to identify the selected article
- guard and resolver to verify the existence of article and redirect the app in case of no or invalid selection
- an article lookup and a very simple "caching" service
- Material Design for Bootstrap (mdbootstrap.com) as design framwork
- some custom pipes to adjust the article content and to sanitize input urls 

## Further thoughts

This solution could be further imporoved
- from caching and loading spinner point of view
- by adding server-side rendering
- service worker and caching to make it offline proof
- with more detailed unit and e2e testing cases
...
