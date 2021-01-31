import { Container, Sprite } from "pixi.js";
import gsap from "gsap";

export default class Cactus extends Container {
  constructor(image) {
    super();
    this._elements = new Container();
    this._body = Sprite.from(image);
    this._rotation = -0.2;
    this._body.anchor.set(0.5, 1);
    this._body.rotation = this._rotation;
    this.addChild(this._body);
  }

  /**
   * @method
   */
  dance() {
    this._rotation *= -1;
    gsap.to(this._body, { rotation: this._rotation });
  }
}
