let video;
let  poseNet;

function setup() {
  createCanvas(640, 480);//创建画布
  video = createCapture(VIDEO);//获取来自摄像头的视频音频元素
  video.hide();//隐藏视频
  poseNet = ml5.poseNet(video, modelLoaded);//初始化poseNet，video是poseNet处理的视频，modelLoaded是模型被加载成功时候的一个回调函数
  poseNet.on('pose', );//每当poseNet监听到pose时间，调用函数
}

function modelLoaded(){
  console.log('PoseNet is successfully loaded!')
}
//每当poseNet检测到pose，调用函数并返回姿势坐标

function draw() {
  // background(220);
  image(video, 0, 0);//将video绘制到画布上
}