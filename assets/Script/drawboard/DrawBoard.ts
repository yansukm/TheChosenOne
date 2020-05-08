
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    brush: cc.Node = null;
    @property(cc.Node)
    widthSlider: cc.Node = null;
    @property(cc.Node)
    colorLayout: cc.Node = null;
    @property(cc.Node)
    toolLayout: cc.Node = null;



    lineWidth: number = 0;
    eraserWidth: number = 0;
    color: cc.Color = null;
    tool = null;

    start () {
        this.brushBtnEvent();
    }

    onLoad () {
        // 去掉模拟器上的FPS信息
        cc.debug.setDisplayStats(false);

        this.lineWidth = 3.5;                     // 笔刷粗细(默认1)
        this.eraserWidth = 10;                  // 橡皮擦大小(特殊笔刷，默认10)
        this.color = cc.Color.BLACK;            // 笔刷颜色(默认黑色)
        this.tool = 'BRUSH';                    // 当前工具(默认笔刷)

        this.node.on('touchstart', this.onTouchStart, this);
        this.node.on('touchmove', this.onTouchMove, this);
    }

    onTouchStart(event) {
        // 设置笔刷起始位置
        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.brush.getComponent('Brush').setBrushPos(pos.x, pos.y);
    }

    onTouchMove(event) {
        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.brush.getComponent('Brush').drawTo(pos.x, pos.y);
    }

    sliderEvent(slider) {
        // 调整笔刷粗细
        if (this.tool == 'BRUSH') {
            this.lineWidth = 1 + slider.progress * 5;
            this.brush.getComponent('Brush').setBrushLineWidth(this.lineWidth);
        }
        else if (this.tool == 'ERASER') {
            this.eraserWidth = 10 + slider.progress * 50;
            this.brush.getComponent('Brush').setBrushLineWidth(this.eraserWidth);
        }
    }

    blackBtnEvent() {  
        if (this.tool == 'BRUSH') {
            this.color = cc.Color.BLACK;
            this.brush.getComponent('Brush').setBrushColor(this.color);

            for (let i=0; i<this.colorLayout.children.length; i++) {
                if (i==0)
                    {this.colorLayout.children[i].opacity = 255;}
                else 
                    {this.colorLayout.children[i].opacity = 100;}
            }
        }
    }

    redBtnEvent() {  
        if (this.tool == 'BRUSH') {
            this.color = cc.Color.RED;
            this.brush.getComponent('Brush').setBrushColor(this.color);

            for (let i=0; i<this.colorLayout.children.length; i++) {
                if (i==1)
                    {this.colorLayout.children[i].opacity = 255;}
                else 
                    {this.colorLayout.children[i].opacity = 100;}
            }
        }
    }

    greenBtnEvent() {  
        if (this.tool == 'BRUSH') {
            this.color = cc.Color.GREEN;
            this.brush.getComponent('Brush').setBrushColor(this.color);

            for (let i=0; i<this.colorLayout.children.length; i++) {
                if (i==2)
                    {this.colorLayout.children[i].opacity = 255;}
                else 
                    {this.colorLayout.children[i].opacity = 100;}
            }
        }
    }

    blueBtnEvent() {  
        if (this.tool == 'BRUSH') {
            this.color = cc.Color.BLUE;
            this.brush.getComponent('Brush').setBrushColor(this.color);

            for (let i=0; i<this.colorLayout.children.length; i++) {
                if (i==3)
                    {this.colorLayout.children[i].opacity = 255;}
                else 
                    {this.colorLayout.children[i].opacity = 100;}
            }
        }
    }

    yellowBtnEvent() {  
        if (this.tool == 'BRUSH') {
            this.color = cc.Color.YELLOW;
            this.brush.getComponent('Brush').setBrushColor(this.color);

            for (let i=0; i<this.colorLayout.children.length; i++) {
                if (i==4)
                    {this.colorLayout.children[i].opacity = 255;}
                else 
                    {this.colorLayout.children[i].opacity = 100;}
            }
        }
    }

    purpleBtnEvent() {  
        if (this.tool == 'BRUSH') {
            this.color = new cc.Color(255, 0, 255);
            this.brush.getComponent('Brush').setBrushColor(this.color);

            for (let i=0; i<this.colorLayout.children.length; i++) {
                if (i==5)
                    {this.colorLayout.children[i].opacity = 255;}
                else 
                    {this.colorLayout.children[i].opacity = 100;}
            }
        }
    }

    cyanBtnEvent() {  
        if (this.tool == 'BRUSH') {
            this.color = new cc.Color(0, 255, 255);
            this.brush.getComponent('Brush').setBrushColor(this.color);

            for (let i=0; i<this.colorLayout.children.length; i++) {
                if (i==6)
                    {this.colorLayout.children[i].opacity = 255;}
                else 
                    {this.colorLayout.children[i].opacity = 100;}
            }
        }
    }

    brushBtnEvent() {
        // 设置笔刷为普通画笔
        this.tool = 'BRUSH';
        this.toolLayout.children[0].opacity = 255;
        this.toolLayout.children[1].opacity = 100;
        this.brush.getComponent('Brush').setBrushColor(this.color);
        this.brush.getComponent('Brush').setBrushLineWidth(this.lineWidth);

        // 设置slider上的handle位置
        this.widthSlider.getComponent(cc.Slider).progress = (this.lineWidth-1) / 5;
    }

    eraserBtnEvent() {
        // 设置笔刷为橡皮擦(特殊笔刷)
        this.tool = 'ERASER';
        this.toolLayout.children[0].opacity = 100;
        this.toolLayout.children[1].opacity = 255;
        this.brush.getComponent('Brush').setBrushColor(cc.Color.WHITE);
        this.brush.getComponent('Brush').setBrushLineWidth(this.eraserWidth);

        // 设置slider上的handle位置
        this.widthSlider.getComponent(cc.Slider).progress = (this.eraserWidth-10) / 50;
    }
}
