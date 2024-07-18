import * as THREE from 'three';
export default class Sefirah extends THREE.Mesh {
  constructor(radius = 0.2, color = 0x6699ff) {
    super();
    this.geometry = new THREE.SphereGeometry(radius, 10, 10);
    this.material = new THREE.MeshStandardMaterial({ color: color });
  }
  set color(_color) {
    this.material.color = new THREE.Color(_color);
  }
  get color() {
    return this.material.color;
  }
}
