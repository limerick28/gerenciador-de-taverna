import { Mainscreen } from './view/MainScreen';
import { Taverna } from './model/Taverna';
import { GameController } from './controller/GameController';

// 1. Inicia a interface visual
const view = new Mainscreen();

// 2. Coleta os dados de configuração iniciais
const nomeEscolhido = view.pedirNomeTaverna();

// 3. Constrói o estado do jogo (Model)
const taverna = new Taverna(nomeEscolhido);

// 4. coloca a Taverna e a View no Controlador e dá o play
const controller = new GameController(taverna, view);
controller.iniciar();