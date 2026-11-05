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
        this.logTurno = [];
    }
    //getters e setters
    getNomeTaverna() {
        return this.nome;
    }
    getDinheiroNoCaixa() {
        return this.caixa;
    }
    getVidaAtual() {
        return this.vidaDoPilar;
    }
    getCaos() {
        return this.nivelDeCaos;
    }
    getTurno() {
        return this.turnoAtual;
    }
    passarTurno() {
        this.turnoAtual++;
        this.alterarCaos(5);
    }
    receberDinheiro(valor) {
        if (valor > 0)
            this.caixa += valor;
    }
    perderDinheiro(valor) {
        this.caixa -= valor;
        if (this.caixa < 0)
            this.caixa = 0;
    }
    sofrerDano(dano, causador) {
        this.vidaDoPilar -= dano;
        if (this.vidaDoPilar < 0)
            this.vidaDoPilar = 0;
        if (causador) {
            this.registrarEvento(`--DANO! A taverna sofreu ${dano} de dano por ${causador}!--\n`);
        }
        else {
            this.registrarEvento(`--DANO! A taverna sofreu ${dano} de dano na estrutura!--\n`);
        }
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
    registrarEvento(mensagem) {
        this.logTurno.push(mensagem + "\n");
    }
    lerELimparLog() {
        const historico = [...this.logTurno];
        this.logTurno = [];
        return historico;
    }
}
exports.Taverna = Taverna;
