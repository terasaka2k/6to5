var _ = require("lodash");

_.each(["BindMemberExpression"], function (type) {
  exports[type] = function () {
    throw new ReferenceError("Trying to render non-standard playground node " + JSON.stringify(type));
  };
});
