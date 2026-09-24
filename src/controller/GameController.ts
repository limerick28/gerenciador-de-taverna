import { Taverna } from './../model/Taverna';
import { Mainscreen } from "../view/MainScreen";

export class GameController{
    private taverna: Taverna;
    private screen: Mainscreen;
    private jogoRodando: boolean;

    constructor(taverna: Taverna, screen: Mainscreen) {
        this.taverna = taverna;
        this.screen = screen;
        this.jogoRodando = true;
    }

    public iniciar(): void{
        this.screen.mostrarMensagem(`As portas da ${this.taverna.nomeTaverna} estão abertas!`);

        while (this.jogoRodando && this.taverna.estaAberta()) {
            this.screen.mostrarStatus(this.taverna);

            const fofocaDoTurno = this.taverna.lerELimparLog();
            this.screen.mostrarlogsDoTurno(fofocaDoTurno);

            this.screen.mostrarMenu();
            const acao = this.screen.pedirAcao();
            this.processarAcao(acao);
        }
        
        if(this.taverna.vida < 0 ){
            this.screen.mostrarMensagem("o teto caiuu!")
        }
        this.screen.mostrarMensagem("Fim de expediente. A taverna fechou!");
    }  
    
    

    private processarAcao(acao: string): void {
        switch (acao) {
            case '1':
                this.screen.mostrarMensagem("Opção 1 selecionada: Servir cliente (desenvolvendo ainda).");
                break;
            case '2':
                this.screen.mostrarMensagem("Opção 2 selecionada: Expulsar cliente (desenvolvendo ainda).");
                break;
            case '3':
                this.taverna.alterarCaos(-15);
                this.screen.mostrarMensagem("Você limpou o chão e acalmou os ânimos. O ambiente respirou.");
                this.taverna.passarTurno(); // Gasta o turno
                break;
            case '4':
                this.screen.mostrarMensagem("Você encostou no balcão e apenas observou o tempo passar...");
                this.taverna.passarTurno(); // Gasta o turno
                break;
            case '0':
                this.jogoRodando = false;
                break;
            default:
                this.screen.mostrarMensagem("Ação inválida! Digite um número do menu.");
                break;
        }
    }


    
}