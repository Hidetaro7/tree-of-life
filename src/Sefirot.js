import * as THREE from 'three';
import Sefirah from './Sefirah.js';
import Line from './Line.js';
export default class Sefirot extends THREE.Object3D {
  constructor() {
    super();
    this.init();
  }
  init() {
    const R = 1;
    const sefirahs = [];
    //

    /* sefirahs.push({
      x: Math.cos(0) * 0,
      y: Math.sin(0) * 0,
      color: 0xff0000,
      name: 'ダアト',
    }); */

    sefirahs.push({
      id: 1,
      x: Math.cos(this.radian(90)) * R,
      y: Math.sin(this.radian(90)) * R,
      color: 0xefefef,
      name: 'ケテル',
    });

    sefirahs.push({
      id: 2,
      x: Math.cos(this.radian(90 - 60)) * R,
      y: Math.sin(this.radian(90 - 60)) * R,
      color: 0xcccccc,
      name: 'コクマー',
    });

    sefirahs.push({
      id: 3,
      x: Math.cos(this.radian(90 + 60)) * R,
      y: Math.sin(this.radian(90 + 60)) * R,
      color: 0x333333,
      name: 'ビナー',
    });

    sefirahs.push({
      id: 4,
      x: Math.cos(this.radian(90 - 120)) * R,
      y: Math.sin(this.radian(90 - 120)) * R,
      color: 0x0000ff,
      name: 'ケセド',
    });

    sefirahs.push({
      id: 5,
      x: Math.cos(this.radian(90 + 120)) * R,
      y: Math.sin(this.radian(90 + 120)) * R,
      color: 0xff0000,
      name: 'ゲブラー',
    });

    sefirahs.push({
      id: 6,
      x: Math.cos(this.radian(-90)) * R,
      y: Math.sin(this.radian(-90)) * R,
      color: 0xffff00,
      name: 'ティファレット',
    });

    sefirahs.push({
      id: 7,
      x: Math.cos(this.radian(90 - 60)) * R,
      y: Math.sin(this.radian(90 - 60)) * R - R * 2,
      color: 0x00ff00,
      name: 'ネツァク',
    });

    sefirahs.push({
      id: 8,
      x: Math.cos(this.radian(90 + 60)) * R,
      y: Math.sin(this.radian(90 + 60)) * R - R * 2,
      color: 0xffb74c,
      name: 'ホド',
    });

    sefirahs.push({
      id: 9,
      x: Math.cos(this.radian(90 + 60)) * 0,
      y: Math.sin(this.radian(90 + 60)) * 0 - R * 2,
      color: 0x6a0dad,
      name: 'イェソド',
    });

    sefirahs.push({
      id: 10,
      x: Math.cos(this.radian(-90)) * R,
      y: Math.sin(this.radian(-90)) * R - R * 2,
      color: 0x00ffff,
      name: 'マルクト',
    });

    sefirahs.forEach((pos) => {
      const sefirah = new Sefirah();
      sefirah.position.x = pos.x;
      sefirah.position.y = pos.y;
      if (pos.color) sefirah.color = pos.color;
      this.add(sefirah);
    });

    const jointLines = [
      [1, 2, 6],
      [1, 3, 6],
      [2, 3],
      [4, 5],
      [7, 8],
      [2, 4, 7, 10],
      [3, 5, 8, 10],
      [4, 6, 8],
      [5, 6, 7],
      [7, 9, 8],
      [1, 6, , 10],
    ];
    jointLines.forEach((lines) => {
      const pos = [];
      lines.forEach((lineData) => {
        const s = sefirahs.filter((se) => se.id === lineData)[0];
        pos.push({ x: s.x, y: s.y });
      });
      const line = new Line(pos);
      this.add(line);
    });
  }
  radian(degree) {
    return degree * (Math.PI / 180);
  }
}
