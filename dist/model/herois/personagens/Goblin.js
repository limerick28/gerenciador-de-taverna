"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goblin = void 0;
const Heroi_1 = require("../Heroi");
class Goblin extends Heroi_1.Heroi {
    constructor(nome = "Goblin") {
        super(nome, 100, 35);
    }
    //sobreescrita
    reagirABriga(taverna) {
        super.reagirABriga(taverna);
        taverna.perderDinheiro(6);
        taverna.registrarEvento(`O ${this.nome} ficou nervoso e roubou 6 de ouro da taverna.`);
    }
}
exports.Goblin = Goblin;
