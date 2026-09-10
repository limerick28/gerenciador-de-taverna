"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taverna = void 0;
class Taverna {
    constructor(nome) {
        this.nome = nome;
        this.caixa = 50;
        this.vidaDoPilar = 100;
        this.nivelDeCaos = 0;
        this.turnoAtual = 1;
    }
    //getters e setters
    get nomeTaverna() {
        return this.nome;
    }
    get dinheiroNoCaixa() {
        return this.caixa;
    }
    get vida() {
        return this.vidaDoPilar;
    }
    get caos() {
        return this.nivelDeCaos;
    }
    get turno() {
        return this.turnoAtual;
    }
    passarTurno() {
        this.turnoAtual++;
        this.alterarCaos(5);
    }
    receberPagamento(valor) {
        if (valor > 0)
            this.caixa += valor;
    }
    perderDinheiro(valor) {
        this.caixa -= valor;
        if (this.caixa < 0)
            this.caixa = 0;
    }
    sofrerDano(dano) {
        this.vidaDoPilar -= dano;
        if (this.vidaDoPilar < 0)
            this.vidaDoPilar = 0;
    }
    alterarCaos(valor) {
        this.nivelDeCaos += valor;
        if (this.nivelDeCaos > 100)
            this.nivelDeCaos = 100;
        if (this.nivelDeCaos < 0)
            this.nivelDeCaos = 0;
    }
    estaAberta() {
        return this.vidaDoPilar > 0;
    }
}
exports.Taverna = Taverna;
