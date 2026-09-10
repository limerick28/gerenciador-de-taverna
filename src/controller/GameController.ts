import { Taverna } from './../model/Taverna';
import { Mainscreen } from "../view/MainScreen";

export class GameController{
    private taverna: Taverna;
    private view: Mainscreen;
    private jogoRodando: boolean;

    constructor(taverna: Taverna, view: Mainscreen) {
        this.taverna = taverna;
        this.view = view;
        this.jogoRodando = true;
    }

    public iniciar(): void{
        this.view.mostrarMensagem(`As portas da ${this.taverna.nomeTaverna} estão abertas!`);

        while (this.jogoRodando && this.taverna.estaAberta()) {
            this.view.mostrarStatus(this.taverna);
            this.view.mostrarMenu();

            const acao = this.view.pedirAcao();
            this.processarAcao(acao);
        }
        if(this.taverna.vida < 0 ){
            this.view.mostrarMensagem("o teto caiuu!")
        }
        this.view.mostrarMensagem("Fim de expediente. A taverna fechou!");
    }    

    private processarAcao(acao: string): void {
        switch (acao) {
            case '1':
                this.view.mostrarMensagem("Opção 1 selecionada: Servir cliente (Em desenvolvimento).");
                // Como não gasta turno ainda, não chamamos passarTurno()
                break;
            case '2':
                this.view.mostrarMensagem("Opção 2 selecionada: Expulsar cliente (Em desenvolvimento).");
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