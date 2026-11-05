"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cerveja = void 0;
class Cerveja {
    constructor() {
        this.nome = "Cerveja do Anão";
        this.preco = 5;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
    aplicarEfeito(heroi, taverna) {
        heroi.aumentarPaciencia(20);
        taverna.registrarEvento(` ${heroi.getNomeHeroi()} bebeu uma ${this.nome} e relaxou.`);
    }
}
exports.Cerveja = Cerveja;
