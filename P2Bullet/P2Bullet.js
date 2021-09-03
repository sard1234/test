/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class P2Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./P2Bullet/costumes/costume1.svg", {
        x: 4.791666666666629,
        y: 4.607999999999834
      })
    ];

    this.sounds = [new Sound("pop", "./P2Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 fire" },
        this.whenIReceiveP2Fire
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveP2Fire() {
    this.createClone();
  }

  *startAsClone() {
    this.goto(this.sprites["Player2"].x, this.sprites["Player2"].y);
    this.direction = this.stage.vars.player2Direction;
    this.visible = true;
    for (let i = 0; i < 180; i++) {
      this.move(3.5);
      if (this.touching(Color.rgb(93, 78, 78))) {
        this.deleteThisClone();
      }
      yield;
    }
    this.deleteThisClone();
  }
}
