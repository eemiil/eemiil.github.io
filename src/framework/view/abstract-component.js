import { createElement } from "../render.js";




export class AbstractComponent {
   #element = null;
   constructor() {
       if (new.target === AbstractComponent) {
         throw new Error('Can\'t instantiate AbstractComponent, only concrete one.');
       }
     }


     getElement() {
       if (!this.#element) {
         this.#element = createElement(this.template);
       }
  
       return this.#element;
     }
     getTemplate() {
       throw new Error('Abstract method not implemented: get template');
     }


     removeElement() {
       this.#element = null;
     }


}
