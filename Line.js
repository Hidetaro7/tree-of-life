import * as THREE from 'three';
export default class Line extends THREE.Line {
  constructor(positions) {
    super();
    const points = [];
    positions.forEach((pos) => {
      points.push(new THREE.Vector3(pos.x, pos.y, 0));
    });
    this.geometry = new THREE.BufferGeometry().setFromPoints(points);
    this.material = new THREE.LineBasicMaterial({
      color: 0x6699ff,
      linewidth: 4,
    });
  }
  set color(_color) {
    this.material.color = new THREE.Color(_color);
  }
  get color() {
    return this.material.color;
  }
}
