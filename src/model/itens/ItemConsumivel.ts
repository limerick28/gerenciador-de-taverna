import { Heroi } from "../herois/Heroi";
import { Taverna } from "../Taverna";

export interface ItemConsumivel {
    getNome(): string;
    getPreco(): number;
    aplicarEfeito(heroi: Heroi, taverna: Taverna): void;
}