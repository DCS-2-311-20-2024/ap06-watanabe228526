//
// 応用プログラミング 第6回 課題1 (ap0601)
// G384002023 拓殖太郎
//
"use strict"; // 厳格モード

// ライブラリのインポート
import * as THREE from "three";
import { OrbitControls } from "three/addons";
import { CSS3DObject, CSS3DRenderer } from "three/addons";
import GUI from "ili-gui";

// ３Ｄページ作成関数の定義
function init() {
  const params = {
    fov: 60, // 視野角
    axes: false, // 座標軸の標示
    cameraH: 6, // カメラの高さ
  };

  const dpy = {
    W:6.2, // ディスプレイの幅
    H: 3.6, // ディスプレイの高さ
    D: 0.2, // ディスプレイの厚さ
    E: 0.1, // ディスプレイの縁
  }
  const std = {
    H: 2.0, // ディスプレイスタンドの高さ
    W: 1.5, // ディスプレイスタンドの幅
    D: 1.9, // ディスプレイスタンドの奥行
    T: 0.1, // ディスプレイスタンドの厚さ
  }

  // シーン作成
  const scene = new THREE.Scene();

   // レンダラの設定
  const nameHeight = document.getElementById("name").clientHeight;
  let canvasHeight = window.innerHeight-nameHeight;
  let canvasWidth = window.innerWidth;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(canvasWidth, canvasHeight);
  renderer.setClearColor(0x406080);
  // renderer.domElement.style.position = "absolute";
  // renderer.domElement.style.top = nameHeight;
  document.getElementById("canvas").appendChild(renderer.domElement);

  // CSSRenderer の追加
  // const cssRenderer = new CSS3DRenderer();
  // cssRenderer.setSize(canvasWidth, canvasHeight);
  // cssRenderer.domElement.style.position = "absolute";
  // cssRenderer.domElement.style.top = nameHeight;
  // document.getElementById("canvas").appendChild(cssRenderer.domElement);

  // カメラの設定
  const camera = new THREE.PerspectiveCamera(
    params.fov, window.innerWidth/window.innerHeight, 0.01, 100);
  camera.position.set(0,0,params.cameraH);
  camera.lookAt(0,0,0);
  
  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  // 光源の作成
  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.position.set(20, 35, 10);
  scene.add(dirLight);

  const ambLight = new THREE.AmbientLight(0x404040, 20);
  scene.add(ambLight);

 
  // CSSRenderer で表示する iframe要素を作る
  const iframe = document.createElement("iframe");
  iframe.style.width = "640px";
  iframe.style.height = "360px";
  iframe.style.border = "0px";
  iframe.src = "https://feng.takushoku-u.ac.jp/course/cs/";







  // カメラ制御
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDumping = true;

  // ディスプレイ
  const display = new THREE.Group();
  {
    // 表示部
    const silverMaterial = new THREE.MeshPhongMaterial({color: "silver"});
    const face = new THREE.Mesh(
      new THREE.BoxGeometry(dpy.W, dpy.H, dpy.D),
      silverMaterial
    );
    display.add(face);
    // スタンド台
    const standBase = new THREE.Mesh(
      
      
    )
    
    //display.add(standBase);    
    // スタンド脚
    const theta = Math.PI/8;
    const standBack = new THREE.Mesh(
      
      
      
      
      
    );
    

    



    //display.add(standBack);

    // 影の設定
  }
  scene.add(display);

  // デスク

  // 描画関数の定義
  function render() {
    axes.visible = params.axes;
    display.children.forEach((child) => {
      child.material.wireframe = params.wireframe;
    });
    orbitControls.update();
    // WebGL レンダラ
    renderer.render(scene, camera);
    // CSS3D レンダラ

    requestAnimationFrame(render);
  }

  // サイズ変更
  window.addEventListener("resize", () => {






  });
  
  // GUIコントローラ
  const gui = new GUI();
  gui.add(params, "axes");
  
  // 最初の描画
  render();
}

// 3Dページ作成関数の呼び出し
init();
