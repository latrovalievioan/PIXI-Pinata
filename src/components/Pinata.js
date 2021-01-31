import { Container, Sprite } from "pixi.js";
import gsap from "gsap";

export default class Pinata extends Container {
  constructor() {
    super();
    this._elements = new Container();
    this._elements.y = 250;
    this._elements.x = 100;
    this._body = new Sprite.from("pinata");
    this._rotation = 0.2;
    this._body.rotation = this._rotation;
    this._body.interactive = true;
    this._body.buttonMode = true;
    this._body.name = "pinata";
    this._body.addChild(this._elements);
    this.addChild(this._body);
    this._body.on("click", () => this.clickHandle());
  }
  /**
   * @method
   * Changes the rotation of the element, alse adds particles.
   */
  dance() {
    this._rotation *= -1;
    gsap.to(this._body, { rotation: this._rotation });
    this.addParticle();
    console.log(this._elements.children);
  }
  /**
   * @method
   * @async
   * Adds new Sprite from particle
   */
  async addParticle() {
    const particle = new Sprite.from("particle");
    particle.name = particle;
    this._elements.addChild(particle);
    await gsap.to(particle, {
      x: Math.floor(Math.random() * 300) - 100,
      y: 200,
      alpha: 0,
      duration: 2,
    });
    this._elements.removeChild(particle);
  }
  /**
   * @method
   * Adds new Sprite from chili
   */
  async addChili() {
    const chili = new Sprite.from("chili");
    chili.name = "chili";
    this._elements.addChild(chili);
    await gsap.to(chili, {
      x: Math.floor(Math.random() * 300) - 100,
      y: 400,
      alpha: 0,
      duration: 1,
    });
    this._elements.removeChild(chili);
  }
  /**
   * @async
   * @method
   * Handles click on the body
   */
  async clickHandle() {
    await gsap.to(this._body.scale, { x: 0.9, y: 0.9, duration: 0.1 });
    this.addChili();
    gsap.to(this._body.scale, { x: 1, y: 1, duration: 0.1 });
  }
}
