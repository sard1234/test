import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import P1Bullet from "./P1Bullet/P1Bullet.js";
import P2Bullet from "./P2Bullet/P2Bullet.js";
import PixelGameButtonsNavigationAndNotationVector19252264 from "./PixelGameButtonsNavigationAndNotationVector19252264/PixelGameButtonsNavigationAndNotationVector19252264.js";
import Player1 from "./Player1/Player1.js";
import Player2 from "./Player2/Player2.js";
import VariableDisplay from "./VariableDisplay/VariableDisplay.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  P1Bullet: new P1Bullet({
    x: 38.69411528652965,
    y: 129.66250134089475,
    direction: -72,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  P2Bullet: new P2Bullet({
    x: 17.897024484900292,
    y: 28.793250397692162,
    direction: -72,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PixelGameButtonsNavigationAndNotationVector19252264: new PixelGameButtonsNavigationAndNotationVector19252264(
    {
      x: 11.000000000000014,
      y: -85.00000000000001,
      direction: 90,
      costumeNumber: 1,
      size: 100,
      visible: false
    }
  ),
  Player1: new Player1({
    x: 132.4335821433022,
    y: 1.9663982472878025,
    direction: 18,
    costumeNumber: 1,
    size: 50.18941361091851,
    visible: true
  }),
  Player2: new Player2({
    x: 240,
    y: 180,
    direction: -18,
    costumeNumber: 1,
    size: 45.45454545454545,
    visible: true
  }),
  VariableDisplay: new VariableDisplay({
    x: 79,
    y: -8,
    direction: 1,
    costumeNumber: 5,
    size: 500,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
