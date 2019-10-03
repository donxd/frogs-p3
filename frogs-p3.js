import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import"./node_modules/@polymer/polymer/lib/elements/dom-if.js";import"./node_modules/@polymer/polymer/lib/elements/dom-repeat.js";const CSS_STYLE_FROG="frog";class FrogsP3 extends PolymerElement{static get template(){return html`
      <style>
        :host {
          display: block;
        }
        :host #elements td {
          width: 50px;
          height: 50px;
          background-color: orange;
          text-align: center;
          border: 2px solid orange;
        }
        :host #elements td:hover {
          border: 2px solid red;
        }
        :host .frog {
          color: rgba(0,0,0,0);
          background-image: url('images/frog.gif');
          background-size: 100%;
          background-position: center center;
          background-repeat: no-repeat;
        }
        :host .table {
          display: table;
        }
        :host .table .row {
          display: table-row;
        }
        :host .table .row .cell {
          display: table-cell;
        }
        :host .vcenter {
          vertical-align: middle;
        }
      </style>
      <h2>Hi frog - [[boxes]]!</h2>
      <dom-if if="{{config}}">
        <template>
          <div class='table'>
            <div class='row'>
              <div class='cell'>
                <label for="nboxes">Número de cajas: &nbsp;</label>
              </div>
              <div class='cell'>
                <input type="number" id="nboxes" min="1" value={{boxes::input}}>
              </div>
            </div>
            <div class='row'>
              <div class='cell'>
                <label for="pfrog">Posición rana: </label>
              </div>
              <div class='cell'>
                <input type="number" id="pfrog" min="1" value={{selected::input}}>
              </div>
            </div>
          </div>
        </template>
      </dom-if>
      <table id='elements'>
        <tr>
          <template id='dinamycElements' is='dom-repeat' items="{{boxesElements}}">
            <td class$='{{getBoxClass(item)}}' on-click='jumpFrogAdv'>{{getIndex(item)}}</td>
          </template>
        </tr>
      </table>
    `}static get properties(){return{boxes:{type:Number,notify:!0,reflectToAttribute:!0,observer:"changeBoxes",value:5},selected:{type:Number,notify:!0,reflectToAttribute:!0,observer:"changeSelected",value:1},config:{type:Boolean,notify:!0,reflectToAttribute:!0,value:!1}}}static get importMeta(){return import.meta}ready(){super.ready();this.generateObjectBoxes()}changeSelected(newPosition,oldPosition){this.changeSelectedByObjects(newPosition,oldPosition)}changeBoxes(newNumberBoxes,oldNumberBoxes){this.changeBoxesByObjects(newNumberBoxes,oldNumberBoxes)}generateObjectBoxes(){this.boxesElements=[];for(let i=0;i<this.boxes;i++){const box=this.getNewBoxObject(i+1,this.selected);this.boxesElements.push(box)}}getNewBoxObject(index,itemSelected){return this.getBoxObject(index,index===itemSelected)}getBoxObject(index,attrSelected){return{selected:attrSelected,index}}getIndex(item){return item.index}getBoxClass(item){return item.selected?CSS_STYLE_FROG:""}jumpFrogAdv(event){const boxSelected=event.model.item;if(boxSelected.selected){const newBoxSelection=boxSelected.index<this.boxesElements.length?this.boxesElements[boxSelected.index]:this.boxesElements[0];this.set(`boxesElements.${boxSelected.index-1}`,this.getBoxObject(boxSelected.index,!1));this.set(`boxesElements.${newBoxSelection.index-1}`,this.getBoxObject(newBoxSelection.index,!0))}}changeBoxesByObjects(newNumberBoxes,oldNumberBoxes){if(!newNumberBoxes)this.oldNumberBoxesAux=oldNumberBoxes;if(!oldNumberBoxes)oldNumberBoxes=this.oldNumberBoxesAux;if(0<newNumberBoxes){if(newNumberBoxes>oldNumberBoxes){this.boxes=newNumberBoxes;this.addBoxesByObjects()}else if(newNumberBoxes<oldNumberBoxes){this.boxes=newNumberBoxes;this.removeBoxesByObjects()}}}addBoxesByObjects(){const numberCreatedBoxes=this.boxesElements.length,numberNewBoxes=this.boxes-numberCreatedBoxes;for(let i=0;i<numberNewBoxes;i++){const newBox=this.getBoxObject(numberCreatedBoxes+1,!1);this.push("boxesElements",newBox)}}getPositionFrogAdvanced(){return this.boxesElements.filter(box=>box.selected)[0].index}removeBoxesByObjects(){let positionFrog=this.getPositionFrogAdvanced();const numberCreatedBoxes=this.boxesElements.length,numberBoxes=this.boxes;if(positionFrog>=numberBoxes){positionFrog=numberBoxes;this.selected=positionFrog;this.set(`boxesElements.${positionFrog-1}`,this.getBoxObject(positionFrog,!0))}for(let i=numberCreatedBoxes-1;i>=numberBoxes;i--){this.pop("boxesElements")}}changeSelectedByObjects(newPosition,oldPosition){if(this.boxesElements&&this.boxesElements.length&&-1<oldPosition){const positionFrog=this.getPositionFrogAdvanced(),newPositionSelection=newPosition<=this.boxesElements.length?newPosition:1;this.selected=newPositionSelection;this.set(`boxesElements.${positionFrog-1}`,this.getBoxObject(positionFrog,!1));this.set(`boxesElements.${newPositionSelection-1}`,this.getBoxObject(newPositionSelection,!0))}}}window.customElements.define("frogs-p3",FrogsP3);