"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
class GameController {
    constructor(taverna, view) {
        this.taverna = taverna;
        this.view = view;
        this.jogoRodando = true;
    }
    iniciar() {
        this.view.mostrarMensagem(`As portas da ${this.taverna.nomeTaverna} estão abertas!`);
        while (this.jogoRodando && this.taverna.estaAberta()) {
            this.view.mostrarStatus(this.taverna);
            this.view.mostrarMenu();
            const acao = this.view.pedirAcao();
            this.processarAcao(acao);
        }
        if (this.taverna.vida < 0) {
            this.view.mostrarMensagem("o teto caiuu!");
        }
        this.view.mostrarMensagem("Fim de expediente. A taverna fechou!");
    }
    processarAcao(acao) {
        switch (acao) {
            case '1':
                this.view.mostrarMensagem("Opção 1 selecionada: Servir cliente (desenvolvendo ainda).");
                break;
            case '2':
                this.view.mostrarMensagem("Opção 2 selecionada: Expulsar cliente (desenvolvendo ainda).");
                break;
            case '3':
                this.taverna.alterarCaos(-15);
                this.view.mostrarMensagem("Você limpou o chão e acalmou os ânimos. O ambiente respirou.");
                this.taverna.passarTurno(); // Gasta o turno
                break;
            case '4':
                this.view.mostrarMensagem("Você encostou no balcão e apenas observou o tempo passar...");
                this.taverna.passarTurno(); // Gasta o turno
                break;
            case '0':
                this.jogoRodando = false;
                break;
            default:
                this.view.mostrarMensagem("Ação inválida! Digite um número do menu.");
                break;
        }
    }
}
exports.GameController = GameController;
