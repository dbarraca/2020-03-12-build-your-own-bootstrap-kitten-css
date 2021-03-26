
[Voila CSS](https://dbarraca.github.io/Voila-CSS/)

# MintBean

Voila CSS was built for a hackathon (learnathon) with [MintBean](https://www.mintbean.io/) using BYOB.css, a starter CSS framework built for [Mintbean Learnathon #82 - Build Your Own Bootstrap](https://mintbean.io/meets/4b9cd41c-4a27-4c08-a493-3095f9fe2b20).

# Local deployment

This project uses yarn workspaces. You'll need to install `yarn` in order to deploy this locally. Yarn is actually an amazing dev tool and has really neat features like caching, which makes `yarn install` MUCH faster than npm.

(You don't have to install yarn. But you might have to fiddle around with `npm link` if you don't! Be warned.)

Once you've installed yarn, you can do:

```
yarn install
yarn start
```

That's it! Then you should be able to visit the project at [http://localhost:1234](http://localhost:1234).


# How this project is structured

This project uses `yarn workspaces` to stitch two separate JS projects together. They are:

- `packages/byob-css`, a lightweight core CSS framework that can be imported into any SCSS-enabled project. You can start reading this project from `packages/byob-css/src/index.scss`. We're using `parcel-bundler` to bundle things together for this app. If you want to push your framework to NPM, you should probably look into replacing this with [Rollup](https://rollupjs.org/).

- `packages/byob-css-example`, an example kitchen sink. It's VERY raw. You can start reading this project from `packages/byob-css-example/index.html`.
