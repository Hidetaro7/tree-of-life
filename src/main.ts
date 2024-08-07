import "./style.css";
//@ts-ignore
import Sefirot from "./Sefirot.js";
//@ts-ignore
import message from "./Message.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <div class="message"></div>
  </div>
`;

// message

message();

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
sefirot.position.y = 1;
sefirot.rotation.x = -0.3;

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
function animation(time: number) {
  sefirot.rotation.y = time / 2000;
  controls.update();
  renderer.render(scene, camera);
}

// ウインドウ幅に合わせる

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
