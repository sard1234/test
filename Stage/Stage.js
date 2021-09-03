/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 245.5,
        y: 196.5
      }),
      new Costume(
        "depositphotos_74211979-stock-illustration-city-car-collision-police-car",
        "./Stage/costumes/depositphotos_74211979-stock-illustration-city-car-collision-police-car.svg",
        { x: 248, y: 259.8800048828125 }
      ),
      new Costume(
        "depositphotos_74211979-stock-illustration-city-car-collision-police-car2",
        "./Stage/costumes/depositphotos_74211979-stock-illustration-city-car-collision-police-car2.svg",
        { x: 247.5, y: 259.3800048828125 }
      ),
      new Costume("images", "./Stage/costumes/images.svg", {
        x: 239.99900817871094,
        y: 185.68951416015625
      })
    ];

    this.sounds = [new Sound("Good To You", "./Stage/sounds/Good To You.mp3")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 wins" },
        this.whenIReceiveP1Wins
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2 WINS" },
        this.whenIReceiveP2Wins
      )
    ];

    this.vars.player1Direction = 18;
    this.vars.player2Direction = -18;
    this.vars.player1Speed = 3;
    this.vars.player1Move = 1;
    this.vars.cooldown1 = 0;
    this.vars.testVariable = 0;
    this.vars._ = 0;
    this.vars.level = 0;
    this.vars.deaths = 0;
    this.vars.stun = 0;
    this.vars.cooldown2 = 0;
  }

  *whenIReceiveStart() {
    this.costume = "backdrop1";
  }

  *whenGreenFlagClicked() {
    this.costume = "images";
  }

  *whenIReceiveP1Wins() {
    this.costume =
      "depositphotos_74211979-stock-illustration-city-car-collision-police-car2";
  }

  *whenIReceiveP2Wins() {
    this.costume =
      "depositphotos_74211979-stock-illustration-city-car-collision-police-car";
  }
}
