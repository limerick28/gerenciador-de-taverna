export class Taverna {
    private nome: string;
    private caixa: number;
    private vidaDoPilar: number;
    private nivelDeCaos: number;
    private turnoAtual: number;

    constructor(nome: string) {
        this.nome = nome;
        this.caixa = 50;
        this.vidaDoPilar = 100;
        this.nivelDeCaos = 0;
        this.turnoAtual = 1;
    }

    //getters e setters
    get nomeTaverna(): string {
        return this.nome;
    }

    get dinheiroNoCaixa(): number {
        return this.caixa;
    }

    get vida(): number {
        return this.vidaDoPilar;
    }

    get caos(): number {
        return this.nivelDeCaos;
    }

    get turno(): number {
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
    public sofrerDano(dano: number): void{
        this.vidaDoPilar -= dano;
        if(this.vidaDoPilar < 0)
            this.vidaDoPilar = 0;
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

}
