import {Heroi} from "../herois/Heroi";
import { Taverna } from "../Taverna";

export abstract class ItemConsumivel {
    protected nome: string;
    protected preco: number;
    
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public abstract aplicarEfeito(heroi: Heroi, taverna: Taverna): void;
}   