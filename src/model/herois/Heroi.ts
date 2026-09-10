import { Taverna } from "../Taverna";

export abstract class Heroi{
    protected nome: string;
    protected ouro: number;
    protected paciencia: number;
    protected quantBebado: number;

    constructor(nome: string, ouroInicial: number, pacienciaInicial: number){
      this.nome = nome;
      this.ouro = ouroInicial;
      this.paciencia = pacienciaInicial;
      this.quantBebado = 0;  
    }

    getNomeHeroi(): string{
        return this.nome;
    }

    getPacienciaAtual(): number{
        return this.paciencia;
    }

    getDinheiro(): number{
        return this.ouro;
    }

    public aguardarFila(): void{
        this.paciencia -= 10;
        if (this.paciencia < 0) this.paciencia = 0;
    }

    public pagar(valor: number): boolean {
        if (this.ouro >= valor) {
            this.ouro -= valor;
            return true;
        }
        return false; // Calote
    }

    public abstract reagirABriga(taverna: Taverna): void; //Todo herói DEVE saber reagir a uma briga, 
    // mas CADA UM faz isso do seu jeito assim estou usando o polimorfismo
}