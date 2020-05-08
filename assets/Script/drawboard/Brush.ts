
const {ccclass, property} = cc._decorator;

@ccclass
export default class Brush extends cc.Component {

    
    // 
    _ctx = null;

    onLoad () {
        this._ctx = this.node.getComponent(cc.Graphics);
    }

    // start () {}

    // update (dt) {}

    setBrushPos (x, y) {
        // 设置笔刷起始位置
        this._ctx.moveTo(x, y);
    }

    setBrushLineWidth(lineWidth) {
        // 设置笔刷粗细
        this._ctx.lineWidth = lineWidth;
    }

    setBrushColor(color) {
        // 设置笔刷颜色(包括边框颜色和填充颜色)
        this._ctx.strokeColor = color;
        this._ctx.fillColor = color;
    }

    drawTo (x, y) {
        // 从起始位置一直画到目标位置
        this._ctx.lineTo(x, y);
        this._ctx.stroke();
        this._ctx.moveTo(x, y);
    }

}
