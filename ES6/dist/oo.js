"use strict";

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Padrão JS

function Pokemon(nomeDoPokemon, tipoDoPokemon, donoDoPokemon) {
  this.nome = nomeDoPokemon;
  this.tipo = tipoDoPokemon;
  this.dono = donoDoPokemon;
}
var pikachu = new Pokemon("Pikachu", "Elétrico", "Sem dono");
console.log(pikachu);

// Padrão ES6
var Pokemon2 = /*#__PURE__*/function () {
  // nome = '';
  // tipo = '';
  //#hp = 100;

  function Pokemon2(nomeDoPokemon2, tipoDoPokemon2, donoDoPokemon2) {
    _classCallCheck(this, Pokemon2);
    this.nome = nomeDoPokemon2;
    this.tipo = tipoDoPokemon2;
    this.dono = donoDoPokemon2;
  }
  return _createClass(Pokemon2, [{
    key: "atacar",
    value: function atacar(nomeDoAtaque) {
      console.log("".concat(this.nome, " atacou com ").concat(nomeDoAtaque));
    }

    // recebeuAtaque() {
    //     this.#hp -= 10;
    // }

    // exibeHp() {
    //     console.log(this.#hp);
    // }
  }]);
}();
var _hpPikachu = /*#__PURE__*/new WeakMap();
var Pikachu = /*#__PURE__*/function (_Pokemon) {
  function Pikachu() {
    var _this;
    _classCallCheck(this, Pikachu);
    _this = _callSuper(this, Pikachu, ['Pikachu', 'Elétrico', 'Ash']);
    _classPrivateFieldInitSpec(_this, _hpPikachu, 100);
    return _this;
  }
  _inherits(Pikachu, _Pokemon);
  return _createClass(Pikachu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com choque do trov\xE3o"));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      _classPrivateFieldSet(_hpPikachu, this, _classPrivateFieldGet(_hpPikachu, this) - 10);
    }
  }, {
    key: "exibeHpDoPikachu",
    value: function exibeHpDoPikachu() {
      console.log("A vida do Pikachu \xE9 de ".concat(_classPrivateFieldGet(_hpPikachu, this)));
    }
  }]);
}(Pokemon2);
var _hpCharmander = /*#__PURE__*/new WeakMap();
var Charmander = /*#__PURE__*/function (_Pokemon2) {
  function Charmander() {
    var _this2;
    _classCallCheck(this, Charmander);
    _this2 = _callSuper(this, Charmander, ['Charmander', 'Fogo', 'Sem Dono']);
    _classPrivateFieldInitSpec(_this2, _hpCharmander, 100);
    return _this2;
  }
  _inherits(Charmander, _Pokemon2);
  return _createClass(Charmander, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com bola de fogo"));
    }
  }, {
    key: "recebeuAtaque",
    value: function recebeuAtaque() {
      _classPrivateFieldSet(_hpCharmander, this, _classPrivateFieldGet(_hpCharmander, this) - 10);
    }
  }, {
    key: "exibeHpDoCharmander",
    value: function exibeHpDoCharmander() {
      console.log("A vida do Charmander \xE9 de ".concat(_classPrivateFieldGet(_hpCharmander, this)));
    }
  }]);
}(Pokemon2);
var pikachuDoAsh = new Pikachu();
var charmander = new Charmander();

// charmander.nome = 'Charmander';
// charmander.tipo = 'Fogo';

console.log(charmander);
charmander.exibeHpDoCharmander();
console.log(pikachuDoAsh);
pikachuDoAsh.exibeHpDoPikachu();
charmander.atacar();
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.exibeHpDoPikachu();
pikachuDoAsh.atacar();
charmander.recebeuAtaque();
charmander.exibeHpDoCharmander();
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh.hp);
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon2);
console.log(pikachuDoAsh instanceof Pokemon);