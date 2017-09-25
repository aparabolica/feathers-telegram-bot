export default function isTelegram () {
  return function (hook) {
    return hook.params.telegram && hook.params.message;
  };
}
