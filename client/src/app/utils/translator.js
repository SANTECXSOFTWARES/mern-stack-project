Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
exports.replaceTokens = replaceTokens;
exports.setMessages = setMessages;
exports.translate = translate;
exports.translateOptions = translateOptions;
exports.translateValues = translateValues;

let messages = {};
let EMPTY = Object.freeze({})

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

function translateOptions(key) {
  return messages[key]|| EMPTY
}

function translateValues(key, values){
  var def = arguments.length >2 && arguments[2] !== undefined ? arguments[2]: key;
  var val = messages[key];

  if(val){
    return Array.isArray(val) ? replaceTokensArray(val,values) : replaceTokens(val,values);
  }
  return def;
}

function replaceTokens(text, values){
  if(values){
    var keys = Object.keys(values);
    keys.forEach(function (name){
      text = text.replace(new RegExp('{'+name+'}','g'), values[name])
    });
    text = text.replace(/{.*?}/g,'').trim()
  }
  return text;
}

function replaceTokensArray(arr,values){
return arr.map(function (text){
  return replaceTokens(text,values)
}).join('\n')
}


var translatorObj = {
  setMessages: setMessages,
  translate: translate,
  translateOptions: translateOptions,
  translateValues:translateValues
};

var _default = translatorObj;
exports["default"] = _default;
