
import { PATTERNING } from "../define/Define";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RectangleItem extends cc.Component {

    @property(cc.Node)
    btnNode: cc.Node = null;
    @property(cc.Node)
    btnBg: cc.Node = null;

    // onLoad () {}

    // start () { }

    // update (dt) {}

    _index: number = 0;


    initItem(index: number, type: string, width: number, height: number, bgColor: cc.Color, ) {

        this._index = index;

        this.node.width = width;
        this.node.height = height;
        this.btnNode.width = width;
        this.btnNode.height = height;

        this.btnNode.getComponent(cc.Button).normalColor = bgColor;
        this.btnBg.color = bgColor;

        return this.node;
    }

    onBtnClick() {
        console.log("按钮点击 index = " + this._index);
    }
}
