"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MainScreen_1 = require("./view/MainScreen");
const Taverna_1 = require("./model/Taverna");
const GameController_1 = require("./controller/GameController");
// 1. Inicia a interface visual o mainscreeen
const view = new MainScreen_1.Mainscreen();
// 2. Cadastra as configuração iniciais...
const nomeEscolhido = view.pedirNomeTaverna();
// 3. Constrói o estado do jogo (Model)
const taverna = new Taverna_1.Taverna(nomeEscolhido);
// 4. coloca a Taverna e a View no Controlador e dá o play
const controller = new GameController_1.GameController(taverna, view);
controller.iniciar();
