"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroi = void 0;
class Heroi {
    constructor(nome, ouroInicial, pacienciaInicial) {
        this.nome = nome;
        this.ouro = ouroInicial;
        this.paciencia = pacienciaInicial;
        this.quantBebado = 0;
    }
    getNomeHeroi() {
        return this.nome;
    }
    getPacienciaAtual() {
        return this.paciencia;
    }
    getDinheiro() {
        return this.ouro;
    }
    aguardarFila() {
        this.paciencia -= 10;
        if (this.paciencia < 0)
            this.paciencia = 0;
    }
    pagar(valor) {
        if (this.ouro >= valor) {
            this.ouro -= valor;
            return true;
        }
        return false; // Calote
    }
}
exports.Heroi = Heroi;
