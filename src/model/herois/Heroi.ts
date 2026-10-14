import { Taverna } from "../Taverna";
import { ItemConsumivel } from "../itens/ItemConsumivel";

export class Heroi{
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

    public aumentarPaciencia(valor: number): void{
        this.paciencia += valor;
    }

    public diminuirPaciencia(valor: number): void{
        this.paciencia -= valor;
        if (this.paciencia < 0) this.paciencia = 0;
    }

    public aumentarBebado(valor: number): void{
        this.quantBebado += valor;
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
        return false;
    }
    
    public ganharDinheiro(valor: number): void {
        this.ouro += valor;
        if (this.ouro < 0) this.ouro = 0;
    }

//sobreescrita asqui
    public reagirABriga(taverna: Taverna): void {
           this.diminuirPaciencia(Math.floor(Math.random() * 11) + 5);
           taverna.alterarCaos(5);
    }
//injecao de dependencia aqui
    public consumir(item: ItemConsumivel, taverna: Taverna): void {
        item.aplicarEfeito(this, taverna); 
    }

    

    }