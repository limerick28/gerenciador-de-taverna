"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Heroi_1 = require("../Heroi");
class Mago extends Heroi_1.Heroi {
    constructor(nome) {
        // Magos têm pouco ouro (30) mas muita paciência (100)
        super(nome, 30, 100);
    }
    reagirABriga(taverna) {
        this.paciencia -= 50;
        if (this.paciencia < 0)
            this.paciencia = 0;
    }
}
exports.Mago = Mago;
