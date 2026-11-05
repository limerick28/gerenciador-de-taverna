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
    aumentarPaciencia(valor) {
        this.paciencia += valor;
    }
    diminuirPaciencia(valor) {
        this.paciencia -= valor;
        if (this.paciencia < 0)
            this.paciencia = 0;
    }
    aumentarBebado(valor) {
        this.quantBebado += valor;
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
        return false;
    }
    ganharDinheiro(valor) {
        this.ouro += valor;
        if (this.ouro < 0)
            this.ouro = 0;
    }
    //sobreescrita asqui
    reagirABriga(taverna) {
        this.diminuirPaciencia(Math.floor(Math.random() * 11) + 5);
        taverna.alterarCaos(5);
    }
    //injecao de dependencia aqui
    consumir(item, taverna) {
        item.aplicarEfeito(this, taverna);
    }
}
exports.Heroi = Heroi;
