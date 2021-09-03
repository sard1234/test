/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Player2/costumes/costume1.png", {
        x: 11,
        y: 11
      })
    ];

    this.sounds = [new Sound("pop", "./Player2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 WINS" },
        this.whenIReceiveP2Wins
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 wins" },
        this.whenIReceiveP1Wins
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 wins" },
        this.whenIReceiveP1Wins2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 WINS" },
        this.whenIReceiveP2Wins2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 wins" },
        this.whenIReceiveP1Wins3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 WINS" },
        this.whenIReceiveP2Wins3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7)
    ];
  }

  *whenIReceiveStart() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.costume = "costume1";
    this.stage.vars.player1Speed = 3;
    this.stage.vars.player1Move = 1;
    this.goto(-215, -150);
    this.direction = 0;
    this.visible = true;
    while (true) {
      this.stage.vars.player2Direction = this.direction;
      if (this.stage.vars.stun == 0) {
        if (this.keyPressed("w") && this.stage.vars.player1Move == 1) {
          this.move(this.stage.vars.player1Speed);
          if (
            this.touching(Color.rgb(102, 102, 102)) ||
            this.touching(Color.rgb(127, 127, 127)) ||
            this.touching(Color.rgb(93, 78, 78))
          ) {
            this.move(0 - this.stage.vars.player1Speed);
          }
        }
        if (this.keyPressed("s") && this.stage.vars.player1Move == 1) {
          this.move(0 - this.stage.vars.player1Speed);
          if (
            this.touching(Color.rgb(102, 102, 102)) ||
            this.touching(Color.rgb(127, 127, 127)) ||
            this.touching(Color.rgb(93, 78, 78))
          ) {
            this.move(this.stage.vars.player1Speed);
          }
        }
        if (this.keyPressed("d")) {
          this.direction += 6;
          if (
            this.touching(Color.rgb(102, 102, 102)) ||
            this.touching(Color.rgb(127, 127, 127)) ||
            this.touching(Color.rgb(93, 78, 78))
          ) {
            this.direction -= 6;
          }
        }
        if (this.keyPressed("a")) {
          this.direction -= 6;
          if (
            this.touching(Color.rgb(102, 102, 102)) ||
            this.touching(Color.rgb(127, 127, 127)) ||
            this.touching(Color.rgb(93, 78, 78))
          ) {
            this.direction += 6;
          }
        }
        if (this.keyPressed("q")) {
          if (this.stage.vars.cooldown2 == 0) {
            this.broadcast("P2 fire");
            this.stage.vars.cooldown2 = 0.2;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["P1Bullet"].andClones())) {
        this.stage.vars.stun = 3;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (0 < this.stage.vars.stun) {
        yield* this.wait(1);
        this.stage.vars.stun += -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.stun = 0;
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.cooldown2 = 0;
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.stage.vars.cooldown2 > 0) {
        yield* this.wait(0.2);
        this.stage.vars.cooldown2 += -0.2;
      }
      yield;
    }
  }

  *whenIReceiveP2Wins() {
    this.goto(4000000, 0);
  }

  *whenIReceiveP1Wins() {
    this.goto(4000000, 40000);
  }

  *whenIReceiveP1Wins2() {
    this.goto(4000000, 40000);
  }

  *whenIReceiveP2Wins2() {
    this.goto(4000000, 40000);
  }

  *whenIReceiveP1Wins3() {
    this.size = 0;
  }

  *whenIReceiveP2Wins3() {
    this.size = 0;
  }

  *whenGreenFlagClicked7() {
    this.size = 100;
  }
}
