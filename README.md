# NewsApp

> ### You can check the working demo at: https://preda7or.github.io/newsapp/

This Angular SPA in its `Articles` section lists the ten latest The Guardian article.
Selecting from the list the app presents the article in more details.
Relying on The Guardian’s API (open-platform.theguardian.com)
The article url input can be used to open the details of a specific The Guardian article.

## Task description

> The goal is to develop an Angular one-page news application that will list recent articles from [The Guardian’s API][guardianapi] and display an article selected by a user.

> The app should have two components:
> * The `Article Component`
>   * the most recent article (if no article has been selected), or
>   * the article selected by the user.
> * The `List Component` should display an array of the 10 most recent articles.

> When a user clicks on an article in the  `List Component` that article should be displayed in the A rticle Component. 

> The app should work on all modern browsers (Chrome, IE10, Firefox & Safari),
there is no need to support outdated browsers.

> Optionally:
> 1. Make the site responsive
> 2. Provide a method by which a user can provide a link to a Guardian article that will then be displayed in the `Article Component` , e.g. https://www.theguardian.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target

Layout 1. | Layout 2.
--- | ---
![layout 1.][layout1] | ![layout 2.][layout2]

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

[guardianapi]: en-platform.theguardian.com
[layout1]: ./docs/layout1.png
[layout2]: ./docs/layout2.png