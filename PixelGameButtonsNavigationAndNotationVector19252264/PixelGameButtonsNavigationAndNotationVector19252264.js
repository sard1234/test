/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixelGameButtonsNavigationAndNotationVector19252264 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixel-game-buttons-navigation-and-notation-vector-19252264",
        "./PixelGameButtonsNavigationAndNotationVector19252264/costumes/pixel-game-buttons-navigation-and-notation-vector-19252264.png",
        { x: 108, y: 42 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.broadcast("start");
  }
}
