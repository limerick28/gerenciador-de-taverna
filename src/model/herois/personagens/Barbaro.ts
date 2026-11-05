import { Heroi } from "../Heroi";
import { Taverna } from "../../Taverna";

export class Barbaro extends Heroi {
    constructor(nome: string = "Barbaro") {
        super(nome, 20, 40); 
    }

    public override reagirABriga(taverna: Taverna): void {
        if (this.paciencia < 0) this.paciencia = 0;
        
        super.reagirABriga(taverna);

        taverna.sofrerDano(15, this.nome);

        taverna.registrarEvento(`Além do Caos, ${this.nome} quebrou uma mesa de carvalho!`);

    }
}