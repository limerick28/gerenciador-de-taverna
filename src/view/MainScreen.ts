import { Taverna } from "../model/Taverna";
import teclado from "readline-sync";

export class Mainscreen{
    public pedirNomeTaverna(): string{
        console.log("=== BEM-VINDO AO SIMULADOR DE TAVERNA ===\n");
        console.log("Qual sera o nome do seu estabelecimento?");
        let nome = teclado.question()

        if(nome.trim() === ""){
            nome = "Taverna do carinha sem nome"
        }
        return nome;
    }

    public mostrarStatus(taverna: Taverna): void{
        console.log(`\n=== ${taverna.nomeTaverna.toUpperCase()} - Turno ${taverna.turno} ===`);
        console.log(`Caixa: ${taverna.dinheiroNoCaixa} moedas | Integridade: ${taverna.vida}% | Caos: ${taverna.caos}%`);
        console.log(`===============================================`);
    }

    public mostrarMenu(): void {
        console.log("Suas ações:");
        console.log("1 - Servir um cliente (Em breve)");
        console.log("2 - Expulsar um cliente (Em breve)");
        console.log("3 - Acalmar o ambiente (Reduz caos, gasta o turno)");
        console.log("4 - Ignorar e passar o tempo");
        console.log("0 - Fechar a Taverna (Sair do jogo)");
    }

    public pedirAcao(): string {
        let resposta
        console.log("o que voce faz?!");
        return  resposta = teclado.question()
    }

    public mostrarMensagem(mensagem: string): void {
        console.log(`\n> ${mensagem}`);
    }
}