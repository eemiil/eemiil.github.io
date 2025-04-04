import {createElement} from '../framework/render.js';


function createButtonDeleteComponentTemplate() {
    return (
        `<button class="clear-btn">
            <span>Очистить</span>
        </button>`
      );  
}


export default class ButtonDeleteComponent {

  getTemplate() {
    return createButtonDeleteComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
