"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var A = (function () {
  var A = function A() {};

  _classProps(A, {
    a: {
      writable: true,
      value: function () {}
    },
    b: {
      get: function () {},
      set: function (b) {}
    }
  });

  return A;
})();
