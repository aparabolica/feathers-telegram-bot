import TelegramBot from 'node-telegram-bot-api';
import hooks from './hooks';
import Message from './message';

export default function init (config = {}) {
  return function telegramBot () {
    const app = this;
    const _super = app.setup;
    const options = Object.assign({}, app.get('telegram') || {}, config);
    app.set('telegram', options);
    if(app.telegram) {
      throw new Error('You have already registered a Telegram Bot.');
    }
    if(!options.token) {
      throw new Error('You must provide a token for your bot.');
    }
    app.telegram = new TelegramBot(options.token, {polling: true});
    console.log('initializing');
    app.setup = function () {
      let result = _super.apply(this, arguments);
      return result;
    }
  }
}

Object.assign(init, {
  hooks,
  Message
});
