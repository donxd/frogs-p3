import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `frogs-p3`
 * frog example on polymer 3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FrogsP3 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'frogs-p3',
      },
    };
  }
}

window.customElements.define('frogs-p3', FrogsP3);
