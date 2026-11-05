import { Taverna } from "../model/Taverna";
import teclado from "readline-sync";

export class Mainscreen {
    
    public pedirNomeTaverna(): string {
        console.log("=== BEM-VINDO AO SIMULADOR DE TAVERNA ===\n");
        let nome = teclado.question("Qual sera o nome do seu estabelecimento? ");

        if (nome.trim() === "") {
            nome = "Taverna do carinha sem nome";
        }
        return nome;
    }

    public mostrarStatus(taverna: Taverna): void {
        console.log(`\n=== ${taverna.getNomeTaverna().toUpperCase()} - Turno ${taverna.getTurno()} ===`);
        console.log(`Caixa: ${taverna.getDinheiroNoCaixa()} moedas | Integridade: ${taverna.getVidaAtual()}% | Caos: ${taverna.getCaos()}%`);
        console.log(`===============================================`);
    }

    public mostrarMenu(): void {
        console.log("Suas ações:");
        console.log("1 - Servir um cliente (Em breve)");
        console.log("2 - Reparar estrutura (Em breve)");
        console.log("3 - Limpar a Taverna (Em breve)");
        console.log("4 - Provocar Briga (Arriscar integridade por moedas perdidas)");
        console.log("5 - Encerrar expediente (Fechar a Taverna)");
        console.log("0 - Fechar a Taverna (Sair do jogo)");
    }

    public pedirAcao(): string {
        console.log("\nO que voce faz?!");
        return teclado.question("> ");
    }

    public mostrarMensagem(mensagem: string): void {
        console.log(`\n> ${mensagem}`);
    }

    public mostrarlogsDoTurno(eventos: string[]): void {
        if (eventos.length > 0) {
            console.log("\n📜 O que aconteceu neste turno:");
            for (let evento of eventos) {
                console.log(` - ${evento}`);
            }
        }
    }
}