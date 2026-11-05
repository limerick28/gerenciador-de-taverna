import { Taverna } from './../model/Taverna';
import { Mainscreen } from "../view/MainScreen";
import { AcaoTaverna } from "../enums/AcaoTaverna";

export class GameController {
    private taverna: Taverna;
    private screen: Mainscreen;
    private jogoRodando: boolean;

    constructor(taverna: Taverna, screen: Mainscreen) {
        this.taverna = taverna;
        this.screen = screen;
        this.jogoRodando = true;
    }

    

    public iniciar(): void{
        this.screen.mostrarMensagem(`As portas da ${this.taverna.getNomeTaverna()} estão abertas!`);

        while (this.jogoRodando && this.taverna.estaAberta()) {
            this.screen.mostrarStatus(this.taverna);

            const fofocaDoTurno = this.taverna.lerELimparLog();
            this.screen.mostrarlogsDoTurno(fofocaDoTurno);

            this.screen.mostrarMenu();
            const acao = this.screen.pedirAcao();
            
            this.processarAcao(acao);
            
            this.finalizarTurno();
        }
        
        if(this.taverna.getVidaAtual() <= 0 ){
            this.screen.mostrarMensagem("O teto caiu!");
        }
        this.screen.mostrarMensagem("Fim de expediente. A taverna fechou!");
    }  
    
    //aq
    private processarAcao(acao: string): void {
        try {
            this.executarAcao(acao);
        } catch (error) {
            if (error instanceof Error) {
                this.screen.mostrarMensagem(` ATENÇÃO: ${error.message}`);
            } else {
                this.screen.mostrarMensagem(" Ocorreu um erro inesperado no turno.");
            }
        }
    }

    private executarAcao(opcao: string): void {
        switch (opcao) {
            case AcaoTaverna.SERVIR_BEBIDA:
                this.screen.mostrarMensagem("Opção selecionada: Servir cliente (desenvolvendo ainda).");
                break;
                
            case AcaoTaverna.REPARAR_ESTRUTURA:
                this.screen.mostrarMensagem("Opção selecionada: Reparar estrutura (desenvolvendo ainda).");
                break;
                
            case AcaoTaverna.LIMPAR_TAVERNA:
                this.taverna.alterarCaos(-15);
                this.screen.mostrarMensagem("Você limpou o chão e acalmou os ânimos. O ambiente respirou.");
                this.taverna.passarTurno(); // Gasta o turno
                break;  
                
            case AcaoTaverna.PROVOCAR_BRIGA:
                if (this.taverna.getVidaAtual() <= 20) {
                    throw new Error("PAROU! A estrutura está tão fraca que uma briga faria o teto desabar em cima de você.");
    }
                const moedasEncontradas = Math.floor(Math.random() * 11) + 10;
                this.taverna.receberDinheiro(moedasEncontradas);

  
                this.screen.mostrarMensagem(" Você jogou um copo na parede e iniciou uma briga generalizada!");
                this.screen.mostrarMensagem(` Após expulsar os brigões, você varreu o chão e lucrou ${moedasEncontradas} moedas perdidas!`);
    
                this.taverna.passarTurno(); 
                    break;
                
            case AcaoTaverna.ENCERRAR_EXPEDIENTE:
                this.jogoRodando = false;
                break;
                
            default:
                // excessao!
                throw new Error("Opção inválida! Escolha um número correto do menu.");
        }
    }

    public finalizarTurno(): void {

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