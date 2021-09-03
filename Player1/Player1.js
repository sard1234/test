/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Player1/costumes/costume1.svg", {
        x: 6.814265000000006,
        y: 6.533664999999985
      })
    ];

    this.sounds = [new Sound("pop", "./Player1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 wins" },
        this.whenIReceiveP1Wins
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 WINS" },
        this.whenIReceiveP2Wins
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8)
    ];
  }

  *whenIReceiveStart() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.costume = "costume1";
    this.stage.vars.player1Speed = 3;
    this.stage.vars.player1Move = 1;
    this.goto(200, -150);
    this.direction = 0;
    this.visible = true;
    while (true) {
      this.stage.vars.player1Direction = this.direction;
      if (this.keyPressed("up arrow") && this.stage.vars.player1Move == 1) {
        this.move(this.stage.vars.player1Speed);
        if (
          this.touching(Color.rgb(102, 102, 102)) ||
          this.touching(Color.rgb(127, 127, 127)) ||
          this.touching(Color.rgb(93, 78, 78))
        ) {
          this.move(0 - this.stage.vars.player1Speed);
        }
      }
      if (this.keyPressed("down arrow") && this.stage.vars.player1Move == 1) {
        this.move(0 - this.stage.vars.player1Speed);
        if (
          this.touching(Color.rgb(102, 102, 102)) ||
          this.touching(Color.rgb(127, 127, 127)) ||
          this.touching(Color.rgb(93, 78, 78))
        ) {
          this.move(this.stage.vars.player1Speed);
        }
      }
      if (this.keyPressed("right arrow")) {
        this.direction += 6;
        if (
          this.touching(Color.rgb(102, 102, 102)) ||
          this.touching(Color.rgb(127, 127, 127)) ||
          this.touching(Color.rgb(93, 78, 78))
        ) {
          this.direction -= 6;
        }
      }
      if (this.keyPressed("left arrow")) {
        this.direction -= 6;
        if (
          this.touching(Color.rgb(102, 102, 102)) ||
          this.touching(Color.rgb(127, 127, 127)) ||
          this.touching(Color.rgb(93, 78, 78))
        ) {
          this.direction += 6;
        }
      }
      if (this.keyPressed("m")) {
        if (this.stage.vars.cooldown1 == 0) {
          this.broadcast("p1 fire");
          this.stage.vars.cooldown1 = 0.2;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    this.stage.vars.testVariable = 60;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.testVariable > 0) {
        this.stage.vars.testVariable += -1;
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      if (null) {
        null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.cooldown1 = 0;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.cooldown1 > 0) {
        yield* this.wait(0.2);
        this.stage.vars.cooldown1 += -0.2;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.touching(this.sprites["P2Bullet"].andClones())) {
        this.broadcast("P2 WINS");
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    yield* this.wait(3);
    while (true) {
      if (this.stage.vars._ == 0) {
        this.broadcast("P1 wins");
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    this.stage.vars.testVariable = 60;
  }

  *whenIReceiveP1Wins() {
    this.size = 0;
  }

  *whenIReceiveP2Wins() {
    this.size = 0;
  }

  *whenGreenFlagClicked8() {
    this.size = 100;
  }
}
