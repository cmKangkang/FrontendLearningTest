import {Observer} from '../Observer.js'
import {Compile} from '../Compile.js';
export default function MyVue(options) {
  this.$options = options;
  this.$data = options.data;
  this.$el = document.querySelector(options.el);
  Object.keys(this.$data).forEach(key => {
    this.proxyData(key);
  });
  this.init();
}

MyVue.prototype.init = function () {
  Observer(this.$data);
  new Compile(this);
}

MyVue.prototype.proxyData = function (key) {
  Object.defineProperty(this, key, {
    get: function () {
      return this.$data[key]
    },
    set: function (value) {
      this.$data[key] = value;
    }
  });
}