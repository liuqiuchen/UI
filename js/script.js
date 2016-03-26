/**
 * Created by Administrator on 2016/3/25.
 */
//棋子落下存入的数组
var chessBoard = []; //是一个二维数组
var isBlack = true;

//初始化二维数组
for(var i = 0;i < 15;i++){
    chessBoard[i] = [];
    for(var j = 0;j < 15;j++){
        chessBoard[i][j] = 0;
    }
}

console.log(chessBoard);

//获取canvas
var chess = document.getElementById('chess');

//获取上下文，创建上下文对象
var context = chess.getContext('2d');

/**画棋子*/
/** x, y 是棋子的索引，
 *  isBlack 是布尔值，判断是白子还是黑子，默认为黑子*/
var oneStep = function (x, y, isBlack) {
    //画圆
    context.beginPath();
    context.arc(15 + x*30, 15 + y*30, 13, 0, 2*Math.PI);
    context.closePath();
    //实现渐变
    //gradient是一个渐变对象
    var gradient = context.createRadialGradient(15 + x*30 + 2, 15 + y*30 - 2, 13, 15 + x*30 + 2, 15 + y*30 - 2, 0);
    if(isBlack){
        gradient.addColorStop(0, '#0A0A0A');
        gradient.addColorStop(1, '#636766');
    }else {
        gradient.addColorStop(0, '#d1d1d1');
        gradient.addColorStop(1, '#f9f9f9');
    }
    context.fillStyle = gradient;
    context.fill(); //填充
};

/**绘制棋盘*/
//设置画笔颜色
context.strokeStyle = '#bfbfbf';

for(var i = 0;i < 15;i++){
    //画纵线
    context.moveTo(15 + i*30, 15);
    context.lineTo(15 + i*30, 435);
    //画线
    context.stroke();//描边

    //画横线
    context.moveTo(15, 15 + i*30);
    context.lineTo(435, 15 + i*30);
    //画线
    context.stroke();

    /*oneStep(0, 0, true);
    oneStep(1, 1, false);*/
}

/**点击落子*/
chess.onclick = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;

    //向下取整
    var i = Math.floor(x / 30);
    var j = Math.floor(y / 30);

    if(chessBoard[i][j] == 0){
        oneStep(i, j, isBlack);
        if(isBlack){
            chessBoard[i][j] = 1;
        }else {
            chessBoard[i][j] = 2;
        }
        isBlack = !isBlack; /**执行完一次事件后取反思想*/
    }

};
































