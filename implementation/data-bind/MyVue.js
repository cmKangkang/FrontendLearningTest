import { Observer } from "./Observer.js";
import {Watcher} from "./Watcher.js"

function MyVue(options, prop) {
  this.$options = options;
  this.$data = options.data;
  this.$prop = prop;
  this.$el = document.querySelector(options.el);
  this.init();
}

MyVue.prototype.init = function() {
  Observer(this.$data);
  this.$el.textContent = this.$data[this.$prop];
  new Watcher(this, this.$prop, value => {
    this.$el.textContent = value;
  })
}

// const vm = new MyVue({
//   el: '#app',
//   data: {
//     name: 'rkk',
//   }
// }, 'name');