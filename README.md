## 🍺 Gerenciador de Taverna RPG (Estudo de P.O.O)

> O **Gerenciador de Taverna RPG** é um projeto que lida com mudança de estado constante (heróis ficando bêbados, mesas quebrando) e comportamentos imprevisíveis. Uma dinâmica muito parecida com minigames de turno e *Overcooked*, sendo o cenário perfeito para aplicar **Programação Orientada a Objetos (POO)**.
> 

Abaixo, a visão do sistema e como os 4 pilares da POO se encaixam nele.

## 1. O Centro do Jogo: Classe `Taverna` (Encapsulamento)

A Taverna é o gerenciador principal. Ela guarda o estado do jogo, e é aqui que o encapsulamento brilha, protegendo as informações de alterações indevidas.

- **Atributos Privados:**
    - `caixa`: Seu dinheiro.
    - `reputacao`: Atrai heróis mais ricos.
    - `integridadeDoPilar`: Se chegar a zero, o teto cai e você perde o jogo.
    - `nivelDeCaos`: O quão agitado está o ambiente.
- **Regra de Negócio (Proteção de Dados):**
Você não pode simplesmente fazer `taverna.caixa += 50`. O dinheiro só entra através do método `cobrarPedido()`.
*Exemplo:* Se o herói for um Ladino e o `nivelDeCaos` estiver alto, o `cobrarPedido()` pode retornar `0` (ele aproveitou a bagunça e fugiu sem pagar).

## 2. Os Clientes: Hierarquia de Heróis (Abstração e Herança)

Não existe um “cliente genérico” no mundo do RPG — todo mundo tem uma classe específica.

- **Abstração:**
Criamos uma classe abstrata `Heroi` definindo o que todo cliente tem e faz:
    - **Atributos:** `nome`, `quantidadeDeOuro`, `nivelDeEmbriaguez`, `paciencia`.
    - **Métodos Obrigatórios:** `fazerPedido()` e `reagirABriga()`.
- **Herança (Especialização):**
A partir de `Heroi`, os comportamentos são especializados:
    - 🪓 **Bárbaro:** Começa com pouca paciência, mas muito ouro (fruto de saques).
    - 🧙‍♂️ **Mago:** Muita paciência, bebe devagar, mas exige bebidas caras.
    - 🗡️ **Ladino:** Paciência média, mas tem chance de roubar itens de outros heróis.

## 3. O Cardápio: Itens Consumíveis (Interfaces e Polimorfismo)

Teremos uma interface (ou classe base) chamada `ItemConsumivel`, com o método contrato: `aplicarEfeito(Heroi heroi)`.

- **Exemplos de Implementação de Itens:**
    - 🍺 **Cerveja Anã:** Custa barato e aumenta a embriaguez muito rápido.
    - 🍷 **Vinho Élfico:** Custa caríssimo, diminui a embriaguez (deixa o herói relaxado) e aumenta a paciência.
    - 🍖 **Carne de Javali Misteriosa:** Mata a fome, mas tem 20% de chance de causar o status *"Envenenado"*, zerando a paciência do herói na hora.

## 4. O Caos: Mecânica de Briga (Polimorfismo em Ação)

A “mágica” da POO aparece nos eventos globais. Por exemplo: se `nivelDeCaos` chega a 100, o método `Taverna.iniciarBrigaGeral()` é chamado.

A taverna itera pela lista de clientes e chama `reagirABriga()` para todos. **Com o polimorfismo, cada herói reage de um jeito diferente à mesma chamada.**

Java

```
// Exemplo prático de Polimorfismo

public class Barbaro extends Heroi{
    @Override
    public void reagirABriga(Taverna taverna){
        // O Bárbaro adora brigar! Ele quebra móveis.
        taverna.sofrerDanoFisico(20);
        this.paciencia = 100; // Ele fica feliz
        System.out.println("Bárbaro jogou uma mesa na parede!");
    }
}

public class Mago extends Heroi{
    @Override
    public void reagirABriga(Taverna taverna){
        // O Mago protege a taverna, mas gasta energia.
        taverna.protegerComEscudoMagico();
        this.paciencia -= 50; // Ele odeia barulho
        System.out.println("Mago conjurou um escudo no balcão!");
    }
}

public class Ladino extends Heroi{
    @Override
    public void reagirABriga(Taverna taverna){
        // O Ladino aproveita a confusão para roubar
        taverna.perderDinheiroDoCaixa(15);
        this.fugirDaTaverna();
        System.out.println("Ladino saqueou o caixa e sumiu nas sombras!");
    }
}
```

## 🕹️ O Menu a Cada Turno (Interface no Terminal)

O controle do jogo funciona em turnos, simulando o avanço do relógio. A cada turno, o sistema imprime o cenário atual e aguarda a decisão do jogador.

Plaintext

```
=== TAVERNA DO OGRO BÊBADO - 20:00 ===
Caixa: 150 moedas | Integridade da Taverna: 80% | Caos: Baixo

No balcão aguardando:
[1] Bárbaro 'Grom' - Paciência: Média - Pedido: Cerveja Anã
[2] Mago 'Merlin'  - Paciência: Alta  - Pedido: Vinho Élfico

Suas ações:
1 - Servir um cliente
2 - Expulsar um cliente (Risco de briga!)
3 - Limpar as mesas e acalmar o ambiente (Gasta seu turno)
4 - Ignorar e passar o tempo
======================================
O que você faz? _
```

### Como as Ações se Conectam com a POO:

- **Ação 1 (Servir):** Selecionando o Bárbaro, o código busca a bebida e chama `barbaro.consumir(cervejaAna)`. O Bárbaro reage aumentando a embriaguez, pagando o ouro e liberando espaço.
- **Ação 2 (Expulsar):** O código chama `taverna.expulsar(ladino)`. Aciona o polimorfismo do cliente (ele pode tentar roubar algo antes de sair ou ir embora xingando).
- **Ação 3 (Acalmar o ambiente):** Você sacrifica o lucro do turno, mas o código executa `taverna.reduzirCaos()`. Escolha estratégica para evitar brigas gerais.

## ⚙️ O Motor do Jogo (Game Loop)

A interação ocorre através da classe `Scanner` do Java (ou equivalente de leitura de input). O programa inteiro roda dentro de um laço de repetição:

Java

```
while (taverna.estaAberta() && taverna.getIntegridade() > 0) {
    // 1. Imprime o status da Taverna
    // 2. Lê a escolha do jogador
    // 3. Resolve a ação escolhida
    // 4. Avança o relógio
    // 5. Diminui paciência de quem não foi atendido
    // 6. Sorteia chegada de novos heróis
}
```

Anotações
