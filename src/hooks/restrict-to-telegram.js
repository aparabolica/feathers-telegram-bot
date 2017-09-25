import errors from 'feathers-errors';

export default function restrictToTelegram (options = {}) {
  return function (hook) {
    if(!hook.params.telegram) {
      throw new errors.Forbidden('You must perform this action through the Telegram bot.');
    }
    return hook;
  };
}
