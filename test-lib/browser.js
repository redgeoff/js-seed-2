'use strict';

require('./chai');

require('./node-and-browser');

var _foo = require('../src/foo');

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('node', function () {
  it('should test only in node', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var foo, thing;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // TODO: insert tests that can only be tested in the browser
            foo = new _foo2.default();
            _context.next = 3;
            return foo.bar();

          case 3:
            thing = _context.sent;

            thing.should.eql('yar');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
});