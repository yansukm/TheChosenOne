

import RectangleItem from "./patterning/RectangleItem";
import { PATTERNING } from "./define/Define";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Patterning extends cc.Component {

    @property(cc.Node)
    layoutGame: cc.Node = null;
    
    @property(cc.Prefab)
    pfb_rectangle: cc.Prefab = null;


    _rectangleItem : RectangleItem = null;

    _verticalNum: number = 0
    _horizontalNum: number = 0;

    onLoad () {

        this._rectangleItem =  new RectangleItem();

        this._verticalNum = 5;
        this._horizontalNum = 5;


    }

    start () {
        for (let i = 0; i < this._horizontalNum; i++) {
            for (let j = 0; j < this._verticalNum; j++) {
                let index = j + (i*this._verticalNum)
                let rectangleItem = cc.instantiate(this.pfb_rectangle);
                let item = rectangleItem.getComponent(RectangleItem).initItem(index, PATTERNING.RECTANGLE, 170, 150, new cc.Color(125, 125, 255));
                this.layoutGame.addChild(item);
                
            }
            
        }

    }

    // update (dt) {}
}
