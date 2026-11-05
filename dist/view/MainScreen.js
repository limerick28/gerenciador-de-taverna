"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mainscreen = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
class Mainscreen {
    pedirNomeTaverna() {
        console.log("=== BEM-VINDO AO SIMULADOR DE TAVERNA ===\n");
        let nome = readline_sync_1.default.question("Qual sera o nome do seu estabelecimento? ");
        if (nome.trim() === "") {
            nome = "Taverna do carinha sem nome";
        }
        return nome;
    }
    mostrarStatus(taverna) {
        console.log(`\n=== ${taverna.getNomeTaverna().toUpperCase()} - Turno ${taverna.getTurno()} ===`);
        console.log(`Caixa: ${taverna.getDinheiroNoCaixa()} moedas | Integridade: ${taverna.getVidaAtual()}% | Caos: ${taverna.getCaos()}%`);
        console.log(`===============================================`);
    }
    mostrarMenu() {
        console.log("Suas ações:");
        console.log("1 - Servir um cliente (Em breve)");
        console.log("2 - Reparar estrutura (Em breve)");
        console.log("3 - Limpar a Taverna (Em breve)");
        console.log("4 - Provocar Briga (Arriscar integridade por moedas perdidas)");
        console.log("5 - Encerrar expediente (Fechar a Taverna)");
        console.log("0 - Fechar a Taverna (Sair do jogo)");
    }
    pedirAcao() {
        console.log("\nO que voce faz?!");
        return readline_sync_1.default.question("> ");
    }
    mostrarMensagem(mensagem) {
        console.log(`\n> ${mensagem}`);
    }
    mostrarlogsDoTurno(eventos) {
        if (eventos.length > 0) {
            console.log("\n📜 O que aconteceu neste turno:");
            for (let evento of eventos) {
                console.log(` - ${evento}`);
            }
        }
    }
}
exports.Mainscreen = Mainscreen;
