# BYOB.css

BYOB.css is an starter CSS framework built for [Mintbean Learnathon #82 - Build Your Own Bootstrap](https://mintbean.io/meets/4b9cd41c-4a27-4c08-a493-3095f9fe2b20).

# Local deployment

This project uses yarn workspaces. You'll need to install `yarn` in order to deploy this locally. Yarn is actually an amazing dev tool and has really neat features like caching, which makes `yarn install` MUCH faster than npm.

(You don't have to install yarn. But you might have to fiddle around with `npm link` if you don't! Be warned.)

Once you've installed yarn, you can do:

```
yarn install
yarn start
```

That's it! Then you should be able to visit the project at [http://localhost:1234](http://localhost:1234).

# Github Pages deployment

This project is set up to deploy directly to your Github Pages. Your project will build and deploy from the `/docs` folder. [Here's the official documentation on how to set up your Github Pages.](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). To get started, you can simply fork the project.
