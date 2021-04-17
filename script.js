'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function () {

  const body = document.querySelector('body');

  if (this.selector.startsWith('.')) {
    const el = document.createElement('div');
    el.classList.add(`${this.selector}`);
    el.textContent = 'любой текст любой текст любой текст любой текст любой текст';
    el.style.cssText = `height:${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
    document.querySelector('body').append(el);

  } else if (this.selector.startsWith('#')) {
    const el = document.createElement('p');
    el.classList.add(`${this.selector}`);
    el.textContent = 'любой текст любой текст любой текст любой текст любой текст';
    el.style.cssText = `height:${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
    document.querySelector('body').append(el);
  }

};

const domElement1 = new DomElement('.kub', '300px', '300px', 'green', '20px');
const el2 = new DomElement('#par', '20px', '400px', 'blue', '30px');

domElement1.createElement();
el2.createElement();