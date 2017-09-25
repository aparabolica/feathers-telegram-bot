# Feathers Telegram Bot

[![Build Status](https://travis-ci.org/aparabolica/feathers-telegram-bot.png?branch=master)](https://travis-ci.org/aparabolica/feathers-telegram-bot)
[![Code Climate](https://codeclimate.com/github/aparabolica/feathers-telegram-bot/badges/gpa.svg)](https://codeclimate.com/github/aparabolica/feathers-telegram-bot)
[![Test Coverage](https://codeclimate.com/github/aparabolica/feathers-telegram-bot/badges/coverage.svg)](https://codeclimate.com/github/aparabolica/feathers-telegram-bot/coverage)
[![Dependency Status](https://img.shields.io/david/aparabolica/feathers-telegram-bot.svg?style=flat-square)](https://david-dm.org/aparabolica/feathers-telegram-bot)
[![Download Status](https://img.shields.io/npm/dm/feathers-telegram-bot.svg?style=flat-square)](https://www.npmjs.com/package/feathers-telegram-bot)

> Connect your feathers app to a Telegram Bot

## Installation

```
npm install feathers-telegram-bot --save
```

## Documentation

Under construction.

## Complete Example

Here's an example of a Feathers server that uses `feathers-telegram-bot`.

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const telegramBot = require('feathers-telegram-bot');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize Feathers Telegram Bot
  .use(telegramBot({
    username: "Your_Bot",
    token: "[your-token-here]"
  }))
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
