import { Heroi } from '../Heroi';
import { Taverna } from '../../Taverna';

export class Goblin extends Heroi {
    constructor(nome: string = "Goblin") {
        super(nome, 100, 35);
    }

//sobreescrita
    public override reagirABriga(taverna: Taverna): void {
        super.reagirABriga(taverna);
        
        taverna.perderDinheiro(6);

        taverna.registrarEvento(`O ${this.nome} ficou nervoso e roubou 6 de ouro da taverna.`);
    }
}    