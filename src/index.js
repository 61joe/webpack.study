import "./index.less";

class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const dog = new Animal("dog");
console.log("aaan");
document.getElementById('btn').onclick = function() {
  import('./handle').then(fn => fn.default());
}
