define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
module.exports = function(str) {
  return str.replace(/./g, function(c) {
    return "\\u" + ('000' + c.charCodeAt(0).toString(16)).substr(-4);
  });
};

return module.exports;});
