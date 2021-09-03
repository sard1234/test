/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VariableDisplay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./VariableDisplay/costumes/1.svg", {
        x: 0.25,
        y: 1.75
      }),
      new Costume("2", "./VariableDisplay/costumes/2.svg", { x: 1, y: 1.75 }),
      new Costume("3", "./VariableDisplay/costumes/3.svg", { x: 1, y: 1.75 }),
      new Costume("4", "./VariableDisplay/costumes/4.svg", { x: 1, y: 1.75 }),
      new Costume("5", "./VariableDisplay/costumes/5.svg", { x: 1, y: 1.75 }),
      new Costume("6", "./VariableDisplay/costumes/6.svg", { x: 1, y: 1.75 }),
      new Costume("7", "./VariableDisplay/costumes/7.svg", { x: 1, y: 1.75 }),
      new Costume("8", "./VariableDisplay/costumes/8.svg", { x: 1, y: 1.75 }),
      new Costume("9", "./VariableDisplay/costumes/9.svg", { x: 1, y: 1.75 }),
      new Costume("0", "./VariableDisplay/costumes/0.svg", { x: 1, y: 1.75 }),
      new Costume(".", "./VariableDisplay/costumes/..svg", {
        x: 0.2722222222222399,
        y: -1.1722222222222172
      }),
      new Costume("e", "./VariableDisplay/costumes/e.svg", {
        x: 1,
        y: 0.7142857142858077
      }),
      new Costume("+", "./VariableDisplay/costumes/+.svg", {
        x: 0.9611111111111086,
        y: 0.9611111111111086
      }),
      new Costume("a", "./VariableDisplay/costumes/a.svg", { x: 1, y: 1.75 }),
      new Costume("b", "./VariableDisplay/costumes/b.svg", { x: 1, y: 1.75 }),
      new Costume("c", "./VariableDisplay/costumes/c.svg", { x: 1, y: 1.75 }),
      new Costume("d", "./VariableDisplay/costumes/d.svg", { x: 1, y: 1.75 }),
      new Costume("E", "./VariableDisplay/costumes/E.svg", { x: 1, y: 1.75 }),
      new Costume("f", "./VariableDisplay/costumes/f.svg", { x: 1, y: 1.75 }),
      new Costume("g", "./VariableDisplay/costumes/g.svg", { x: 1, y: 1.75 }),
      new Costume("h", "./VariableDisplay/costumes/h.svg", { x: 1, y: 1.75 }),
      new Costume("i", "./VariableDisplay/costumes/i.svg", {
        x: 0.75,
        y: 1.75
      }),
      new Costume("j", "./VariableDisplay/costumes/j.svg", { x: 1, y: 1.75 }),
      new Costume("k", "./VariableDisplay/costumes/k.svg", { x: 1, y: 1.75 }),
      new Costume("l", "./VariableDisplay/costumes/l.svg", { x: 1, y: 1.75 }),
      new Costume("m", "./VariableDisplay/costumes/m.svg", { x: 240, y: 180 }),
      new Costume("n", "./VariableDisplay/costumes/n.svg", { x: 1, y: 1.5 }),
      new Costume("o", "./VariableDisplay/costumes/o.svg", { x: 1, y: 1.75 }),
      new Costume("p", "./VariableDisplay/costumes/p.svg", { x: 1, y: 1.75 }),
      new Costume("q", "./VariableDisplay/costumes/q.svg", {
        x: 1.25,
        y: 1.75
      }),
      new Costume("r", "./VariableDisplay/costumes/r.svg", { x: 1, y: 1.75 }),
      new Costume("s", "./VariableDisplay/costumes/s.svg", { x: 1, y: 1.75 }),
      new Costume("t", "./VariableDisplay/costumes/t.svg", {
        x: 1.25,
        y: 1.75
      }),
      new Costume("u", "./VariableDisplay/costumes/u.svg", { x: 1, y: 1.75 }),
      new Costume("v", "./VariableDisplay/costumes/v.svg", { x: 1, y: 1.75 }),
      new Costume("w", "./VariableDisplay/costumes/w.svg", { x: 240, y: 180 }),
      new Costume("x", "./VariableDisplay/costumes/x.svg", { x: 1, y: 1.75 }),
      new Costume("y", "./VariableDisplay/costumes/y.svg", {
        x: 1.25,
        y: 1.75
      }),
      new Costume("z", "./VariableDisplay/costumes/z.svg", { x: 1.25, y: 1.75 })
    ];

    this.sounds = [new Sound("pop", "./VariableDisplay/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
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
        { name: "P1 wins" },
        this.whenIReceiveP1Wins3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 WINS" },
        this.whenIReceiveP2Wins
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 WINS" },
        this.whenIReceiveP2Wins2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.digit = 31;
  }

  *startAsClone() {
    this.direction = this.vars.digit;
    this.goto(180 + 15 * this.vars.digit, 130);
    this.costume = this.stage.vars._[this.vars.digit - 1];
    while (true) {
      if (this.direction < this.stage.vars._.length + 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      this.costume = this.stage.vars._[this.direction - 1];
      yield;
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.stage.vars._ = this.stage.vars.testVariable;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.vars.digit = 1;
    for (let i = 0; i < 30; i++) {
      this.createClone();
      this.vars.digit += 1;
      yield;
    }
  }

  *whenIReceiveP1Wins() {
    this.visible = false;
  }

  *whenIReceiveP1Wins2() {
    this.visible = false;
  }

  *whenIReceiveP1Wins3() {
    this.visible = false;
  }

  *whenIReceiveP2Wins() {
    this.visible = false;
  }

  *whenIReceiveP2Wins2() {
    while (true) {
      this.stage.vars.testVariable = 100;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.size = 500;
  }
}
