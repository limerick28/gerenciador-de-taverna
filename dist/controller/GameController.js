"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const AcaoTaverna_1 = require("../enums/AcaoTaverna");
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
class GameController {
    constructor(taverna, screen) {
        this.taverna = taverna;
        this.screen = screen;
        this.jogoRodando = true;
    }
    async iniciar() {
        this.screen.mostrarMensagem(`As portas da ${this.taverna.getNomeTaverna()} estão abertas!`);
        while (this.jogoRodando && this.taverna.estaAberta()) {
            this.screen.mostrarStatus(this.taverna);
            const fofocaDoTurno = this.taverna.lerELimparLog();
            this.screen.mostrarlogsDoTurno(fofocaDoTurno);
            this.screen.mostrarMenu();
            const acao = this.screen.pedirAcao();
            // Aqui entra no fluxo do Try/Catch
            this.processarAcao(acao);
            // Verifica as condições de derrota/vitória a cada turno
            this.finalizarTurno();
        }
        if (this.taverna.getVidaAtual() <= 0) {
            this.screen.mostrarMensagem("O teto caiu!");
        }
        this.screen.mostrarMensagem("Fim de expediente. A taverna fechou!");
        await esperar(2000);
    }
    // Método isolado apenas para gerenciar as Exceções
    processarAcao(acao) {
        try {
            this.executarAcao(acao);
        }
        catch (error) {
            if (error instanceof Error) {
                this.screen.mostrarMensagem(` ATENÇÃO: ${error.message}`);
            }
            else {
                this.screen.mostrarMensagem(" Ocorreu um erro inesperado no turno.");
            }
        }
    }
    // Método isolado apenas para as Regras de Negócio
    executarAcao(opcao) {
        switch (opcao) {
            case AcaoTaverna_1.AcaoTaverna.SERVIR_BEBIDA:
                // Exemplo no futuro onde vou add:
                // if (this.taverna.getDinheiroNoCaixa() < custoBebida) {
                //     throw new Error("Moedas insuficientes para comprar bebidas!");
                this.screen.mostrarMensagem("Opção selecionada: Servir cliente (desenvolvendo ainda).");
                break;
            case AcaoTaverna_1.AcaoTaverna.REPARAR_ESTRUTURA:
                this.screen.mostrarMensagem("Opção selecionada: Reparar estrutura (desenvolvendo ainda).");
                break;
            case AcaoTaverna_1.AcaoTaverna.LIMPAR_TAVERNA:
                this.taverna.alterarCaos(-15);
                this.screen.mostrarMensagem("Você limpou o chão e acalmou os ânimos. O ambiente respirou.");
                this.taverna.passarTurno(); // Gasta o turno
                break;
            case AcaoTaverna_1.AcaoTaverna.PROVOCAR_BRIGA:
                if (this.taverna.getVidaAtual() <= 20) {
                    throw new Error("PAROU! A estrutura está tão fraca que uma briga faria o teto desabar em cima de você.");
                }
                const moedasEncontradas = Math.floor(Math.random() * 41) + 10;
                this.taverna.receberDinheiro(moedasEncontradas);
                this.screen.mostrarMensagem("💥 Você jogou um copo na parede e iniciou uma briga generalizada!");
                this.screen.mostrarMensagem(`💰 Após expulsar os brigões, você varreu o chão e lucrou ${moedasEncontradas} moedas perdidas!`);
                this.taverna.passarTurno();
                break;
            case AcaoTaverna_1.AcaoTaverna.ENCERRAR_EXPEDIENTE:
                this.jogoRodando = false;
                break;
            default:
                // excessao!
                throw new Error("Opção inválida! Escolha um número correto do menu.");
        }
    }
    finalizarTurno() {
        if (this.taverna.getVidaAtual() <= 0) {
            this.taverna.registrarEvento("💀 GAME OVER! Sua taverna foi reduzida a escombros pelas brigas!");
            this.jogoRodando = false;
        }
        else if (this.taverna.getDinheiroNoCaixa() < 0) {
            this.taverna.registrarEvento("💸 GAME OVER! Você faliu e os guardas confiscaram o local.");
            this.jogoRodando = false;
        }
    }
}
exports.GameController = GameController;
