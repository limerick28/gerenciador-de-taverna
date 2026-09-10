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
        let nome = readline_sync_1.default.question("Qual sera o nome do seu estabelecimento?");
        if (nome.trim() === "") {
            nome = "Taverna do carinha sem nome";
        }
        return nome;
    }
    mostrarStatus(taverna) {
        console.log(`\n=== ${taverna.nomeTaverna.toUpperCase()} - Turno ${taverna.turno} ===`);
        console.log(`Caixa: ${taverna.dinheiroNoCaixa} moedas | Integridade: ${taverna.vida}% | Caos: ${taverna.caos}%`);
        console.log(`===============================================`);
    }
    mostrarMenu() {
        console.log("Suas ações:");
        console.log("1 - Servir um cliente (Em breve)");
        console.log("2 - Expulsar um cliente (Em breve)");
        console.log("3 - Acalmar o ambiente (Reduz caos, gasta o turno)");
        console.log("4 - Ignorar e passar o tempo");
        console.log("0 - Fechar a Taverna (Sair do jogo)");
    }
    pedirAcao() {
        let resposta;
        console.log("o que voce faz?!");
        return resposta = readline_sync_1.default.question();
    }
    mostrarMensagem(mensagem) {
        console.log(`\n> ${mensagem}`);
    }
}
exports.Mainscreen = Mainscreen;
