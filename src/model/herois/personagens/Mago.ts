import { Heroi } from "../Heroi";
import { Taverna } from "../../Taverna";

export class Mago extends Heroi {
    constructor(nome: string) {
        // Magos têm pouco ouro (30) mas muita paciência (100)
        super(nome, 30, 100); 
    }

    public override reagirABriga(taverna: Taverna): void {
        this.paciencia -= 50;
        if (this.paciencia < 0) this.paciencia = 0;
    }
}