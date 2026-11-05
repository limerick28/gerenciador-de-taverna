import { ItemConsumivel } from "../ItemConsumivel";
import { Heroi } from "../../herois/Heroi";
import { Taverna } from "../../Taverna";

export class Cerveja implements ItemConsumivel {
    private nome: string = "Cerveja do Anão";
    private preco: number = 5;

    public getNome(): string {
        return this.nome;
    }

    
    public getPreco(): number {
        return this.preco;
    }

    public aplicarEfeito(heroi: Heroi, taverna: Taverna): void {
        heroi.aumentarPaciencia(20);
        taverna.registrarEvento(` ${heroi.getNomeHeroi()} bebeu uma ${this.nome} e relaxou.`);
    }
}