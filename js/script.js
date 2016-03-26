/**
 * Created by Administrator on 2016/3/25.
 */
//�������´��������
var chessBoard = []; //��һ����ά����
var isBlack = true;

//��ʼ����ά����
for(var i = 0;i < 15;i++){
    chessBoard[i] = [];
    for(var j = 0;j < 15;j++){
        chessBoard[i][j] = 0;
    }
}

console.log(chessBoard);

//��ȡcanvas
var chess = document.getElementById('chess');

//��ȡ�����ģ����������Ķ���
var context = chess.getContext('2d');

/**������*/
/** x, y �����ӵ�������
 *  isBlack �ǲ���ֵ���ж��ǰ��ӻ��Ǻ��ӣ�Ĭ��Ϊ����*/
var oneStep = function (x, y, isBlack) {
    //��Բ
    context.beginPath();
    context.arc(15 + x*30, 15 + y*30, 13, 0, 2*Math.PI);
    context.closePath();
    //ʵ�ֽ���
    //gradient��һ���������
    var gradient = context.createRadialGradient(15 + x*30 + 2, 15 + y*30 - 2, 13, 15 + x*30 + 2, 15 + y*30 - 2, 0);
    if(isBlack){
        gradient.addColorStop(0, '#0A0A0A');
        gradient.addColorStop(1, '#636766');
    }else {
        gradient.addColorStop(0, '#d1d1d1');
        gradient.addColorStop(1, '#f9f9f9');
    }
    context.fillStyle = gradient;
    context.fill(); //���
};

/**��������*/
//���û�����ɫ
context.strokeStyle = '#bfbfbf';

for(var i = 0;i < 15;i++){
    //������
    context.moveTo(15 + i*30, 15);
    context.lineTo(15 + i*30, 435);
    //����
    context.stroke();//���

    //������
    context.moveTo(15, 15 + i*30);
    context.lineTo(435, 15 + i*30);
    //����
    context.stroke();

    /*oneStep(0, 0, true);
    oneStep(1, 1, false);*/
}

/**�������*/
chess.onclick = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;

    //����ȡ��
    var i = Math.floor(x / 30);
    var j = Math.floor(y / 30);

    if(chessBoard[i][j] == 0){
        oneStep(i, j, isBlack);
        if(isBlack){
            chessBoard[i][j] = 1;
        }else {
            chessBoard[i][j] = 2;
        }
        isBlack = !isBlack; /**ִ����һ���¼���ȡ��˼��*/
    }

};
































