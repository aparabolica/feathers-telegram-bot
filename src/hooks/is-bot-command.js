import errors from 'feathers-errors';

export default function isBotCommand (config = {}) {
  return function (hook) {
    if(!hook.params.telegram || !hook.params.message)
      throw new errors.MethodNotAllowed('This is not a telegram message.');
    const message = hook.params.message;
    return message.text && message.text.indexOf('/') === 0;
  };
}
