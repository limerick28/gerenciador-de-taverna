"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barbaro = void 0;
const Heroi_1 = require("../Heroi");
class Barbaro extends Heroi_1.Heroi {
    constructor(nome = "Barbaro") {
        super(nome, 20, 40);
    }
    reagirABriga(taverna) {
        if (this.paciencia < 0)
            this.paciencia = 0;
        super.reagirABriga(taverna);
        taverna.sofrerDano(15, this.nome);
        taverna.registrarEvento(`Além do Caos, ${this.nome} quebrou uma mesa de carvalho!`);
    }
}
exports.Barbaro = Barbaro;
