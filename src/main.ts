import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Sefirot from "./Sefirot.js";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <canvas id="bg"></canvas>
  </div>
`;

// init
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  100
);
camera.position.z = 5;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x101010);

const sefirot = new Sefirot();
scene.add(sefirot);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.2;

// 平行光源を作成
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);
// 環境光を追加
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// animation
function animation(time) {
  //sefirot.rotation.y = time / 1000;
  controls.update();
  renderer.render(scene, camera);
}
