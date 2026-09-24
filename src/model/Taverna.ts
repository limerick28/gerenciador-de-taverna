export class Taverna {
    private nome: string;
    private caixa: number;
    private vidaDoPilar: number;
    private nivelDeCaos: number;
    private turnoAtual: number;
    private logTurno: string[];

    constructor(nome: string) {
        this.nome = nome;
        this.caixa = 50;
        this.vidaDoPilar = 100;
        this.nivelDeCaos = 0;
        this.turnoAtual = 1;
        this.logTurno = [];

    }

    //getters e setters
    public get nomeTaverna(): string {
        return this.nome;
    }

    public get dinheiroNoCaixa(): number {
        return this.caixa;
    }

    public get vida(): number {
        return this.vidaDoPilar;
    }

    public get caos(): number {
        return this.nivelDeCaos;
    }

    public get turno(): number {
        return this.turnoAtual;
    }
        
    public passarTurno(): void {
        this.turnoAtual++;
        this.alterarCaos(5);
    }

    public receberPagamento(valor: number): void{
        if(valor > 0)
            this.caixa += valor;
    }

    public perderDinheiro(valor: number): void{
        this.caixa -= valor;
        if (this.caixa < 0)
            this.caixa = 0;
    }

    public sofrerDano(dano: number, causador?: string): void{
        this.vidaDoPilar -= dano;
        if(this.vidaDoPilar < 0)
            this.vidaDoPilar = 0;

        if(causador){
            this.registrarEvento(`--DANO! A taverna sofreu ${dano} de dano por ${causador}!--\n`);
        } else {
            this.registrarEvento(`--DANO! A taverna sofreu ${dano} de dano na estrutura!--\n`);
        }
    }

    public alterarCaos(valor: number): void{
        this.nivelDeCaos += valor;
        if (this.nivelDeCaos > 100) 
            this.nivelDeCaos = 100;

        if (this.nivelDeCaos < 0) 
            this.nivelDeCaos = 0;
    }

    public estaAberta(): boolean{
        return this.vidaDoPilar > 0
    }

    registrarEvento(mensagem: string): void { 
        this.logTurno.push(mensagem + "\n");
    }

    public lerELimparLog(): string[] {
        const historico = [...this.logTurno];
        this.logTurno = [];
        return historico;
    }
}
