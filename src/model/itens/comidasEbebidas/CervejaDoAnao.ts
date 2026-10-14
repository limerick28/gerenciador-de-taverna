import { ItemConsumivel } from "../ItemConsumivel";
import { Heroi } from "../../herois/Heroi";
import { Taverna } from "../../Taverna";

export class CervejaDoAnao extends ItemConsumivel {
    constructor() {
        super("Cerveja do Anão", 10);
    }
    
    public override aplicarEfeito(heroi: Heroi, taverna: Taverna): void {
        heroi.aumentarPaciencia(20);
        heroi.aumentarBebado(4); 
        taverna.registrarEvento(`O ${heroi.getNomeHeroi()} bebeu uma Cerveja do Anão e aumentou sua paciência em 20.`);
    }    
}
