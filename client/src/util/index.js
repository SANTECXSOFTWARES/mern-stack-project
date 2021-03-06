Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
exports.setMessages = setMessages;
exports.translate = translate;

let messages = {};

function setMessages(json) {
  messages = json;
  if (messages.documentTitle) {
    document.title = messages.documentTitle;
  }
}

function translate(key) {
  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : key;
  return messages[key] || def;
}

var translatorObj = {
  setMessages: setMessages,
  translate: translate,
};

var _default = translatorObj;
exports["default"] = _default;
