# 🍺 Gerenciador de Taverna RPG (Estudo de P.O.O)

> O **Gerenciador de Taverna RPG** é um projeto de estudo desenvolvido em Java que lida com mudança de estado constante (heróis ficando bêbados, mesas quebrando) e comportamentos imprevisíveis. Uma dinâmica muito parecida com minigames de turno e *Overcooked*, sendo o cenário perfeito para aplicar na prática os **4 Pilares da Programação Orientada a Objetos (POO)**.

---

## 🏗️ Arquitetura e Pilares da POO

Abaixo, a visão geral do sistema e como os conceitos de POO foram aplicados na lógica de negócios:

### 1. O Centro do Jogo: Classe `Taverna` (Encapsulamento)

A `Taverna` é o gerenciador principal. Ela guarda o estado do jogo, e é aqui que o encapsulamento brilha, protegendo as informações de alterações indevidas.

* **Atributos Privados:**
  * `caixa`: Seu dinheiro.
  * `reputacao`: Atrai heróis mais ricos.
  * `integridadeDoPilar`: Se chegar a zero, o teto cai e você perde o jogo.
  * `nivelDeCaos`: O quão agitado está o ambiente.

* **Regra de Negócio (Proteção de Dados):**
Você não pode simplesmente fazer `taverna.caixa += 50`. O dinheiro só entra através do método `cobrarPedido()`. 
*Exemplo:* Se o herói for um Ladino e o `nivelDeCaos` estiver alto, o `cobrarPedido()` pode retornar `0` (ele aproveitou a bagunça e fugiu sem pagar).

### 2. Os Clientes: Hierarquia de Heróis (Abstração e Herança)

Para lidar com diferentes tipos de clientes sem repetir código, utilizamos uma classe abstrata base chamada `Heroi`.

* **Abstração:** A classe `Heroi` define os atributos básicos que todo cliente tem (`nome`, `ouro`, `paciencia`, `nivelEmbriaguez`) e os métodos obrigatórios que devem existir, mas não podem ser instanciados de forma genérica.
* **Herança:** Classes específicas como `Barbaro`, `Mago` e `Ladino` herdam de `Heroi`. Elas reaproveitam os atributos básicos, mas implementam regras únicas (ex: o Mago tem mais paciência, o Bárbaro bebe mais rápido).

### 3. O Cardápio: Itens Consumíveis (Interfaces e Polimorfismo)

Temos uma interface (ou classe base) chamada `ItemConsumivel`, com o contrato de método: `aplicarEfeito(Heroi heroi)`.

* **Exemplos de Implementação de Itens:**
  * 🍺 **Cerveja Anã:** Custa barato e aumenta a embriaguez muito rápido.
  * 🍷 **Vinho Élfico:** Custa caríssimo, diminui a embriaguez (deixa o herói relaxado) e aumenta a paciência.
  * 🍖 **Carne de Javali Misteriosa:** Mata a fome, mas tem 20% de chance de causar o status *"Envenenado"*, zerando a paciência do herói na hora.

### 4. O Caos: Mecânica de Briga (Polimorfismo em Ação)

A “mágica” da POO aparece nos eventos globais. Por exemplo: se o `nivelDeCaos` chega a 100, o método `Taverna.iniciarBrigaGeral()` é chamado.

A taverna itera pela lista de clientes e chama `reagirABriga()` para todos. **Com o polimorfismo, cada herói reage de um jeito diferente à mesma chamada.**

```java
// Exemplo prático de Polimorfismo

public class Barbaro extends Heroi {
    @Override
    public void reagirABriga(Taverna taverna) {
        // O Bárbaro adora brigar! Ele quebra móveis.
        taverna.sofrerDanoFisico(20);
        this.paciencia = 100; // Ele fica feliz
        System.out.println("Bárbaro jogou uma mesa na parede!");
    }
}

public class Mago extends Heroi {
    @Override
    public void reagirABriga(Taverna taverna) {
        // O Mago protege a taverna, mas gasta energia.
        taverna.protegerComEscudoMagico();
        this.paciencia -= 50; // Ele odeia barulho
        System.out.println("Mago conjurou um escudo no balcão!");
    }
}

public class Ladino extends Heroi {
    @Override
    public void reagirABriga(Taverna taverna) {
        // O Ladino aproveita a confusão para roubar
        taverna.perderDinheiroDoCaixa(15);
        this.fugirDaTaverna();
        System.out.println("Ladino saqueou o caixa e sumiu nas sombras!");
    }
}

O dinheiro deve entrar através de métodos responsáveis por controlar as regras do jogo, como:

taverna.cobrarPedido();

Por exemplo, se o herói for um Ladino e o nivelDeCaos estiver alto, o método cobrarPedido() pode retornar 0, pois o Ladino aproveitou a confusão para fugir sem pagar.

2. 🧙 Os Clientes: Hierarquia de Heróis
Abstração e Herança

Não existe um "cliente genérico" no mundo do RPG. Cada cliente possui características e comportamentos específicos.

Abstração

Podemos criar uma classe abstrata chamada Heroi, responsável por definir o que todos os clientes possuem e fazem.

Atributos
nome
quantidadeDeOuro
nivelDeEmbriaguez
paciencia
Métodos obrigatórios
fazerPedido()
reagirABriga()
Herança

A partir da classe Heroi, podemos criar diferentes tipos de personagens.

🪓 Bárbaro
Pouca paciência.
Muito ouro, obtido através de saques.
Gosta de brigas.
Pode causar bastante dano à taverna.
🧙‍♂️ Mago
Alta paciência.
Bebe devagar.
Prefere bebidas caras.
Pode utilizar magia para proteger a taverna.
🗡️ Ladino
Paciência média.
Possui chance de roubar itens.
Pode fugir sem pagar.
Aproveita situações de caos para cometer roubos.
3. 🍺 O Cardápio: Itens Consumíveis
Interfaces e Polimorfismo

Podemos utilizar uma interface ou classe base chamada ItemConsumivel.

Ela define um contrato para todos os itens consumíveis:

aplicarEfeito(Heroi heroi);

Cada item pode implementar esse método de maneira diferente.

Exemplos de itens
🍺 Cerveja Anã
Custo baixo.
Aumenta bastante a embriaguez.
Pode diminuir a paciência.
🍷 Vinho Élfico
Custo alto.
Diminui a embriaguez.
Aumenta a paciência.
É procurado principalmente por personagens mais exigentes.
🍖 Carne de Javali Misteriosa
Diminui a fome.
Possui 20% de chance de causar o status "Envenenado".
Ao ser envenenado, o herói perde toda a paciência.
4. ⚔️ O Caos: Mecânica de Briga
Polimorfismo em ação

A "mágica" da POO aparece principalmente nos eventos globais.

Por exemplo, quando:

nivelDeCaos >= 100

a taverna pode iniciar uma briga geral:

taverna.iniciarBrigaGeral();

A taverna percorre todos os clientes e chama:

heroi.reagirABriga(taverna);

Mesmo que todos recebam a mesma chamada, cada tipo de herói pode reagir de uma maneira diferente.

Isso é polimorfismo.

Exemplo
public class Barbaro extends Heroi {

    @Override
    public void reagirABriga(Taverna taverna) {
        // O Bárbaro adora brigar! Ele quebra móveis.
        taverna.sofrerDanoFisico(20);

        this.paciencia = 100;

        System.out.println(
            "Bárbaro jogou uma mesa na parede!"
        );
    }
}
public class Mago extends Heroi {

    @Override
    public void reagirABriga(Taverna taverna) {
        // O Mago protege a taverna, mas gasta energia.
        taverna.protegerComEscudoMagico();

        this.paciencia -= 50;

        System.out.println(
            "Mago conjurou um escudo no balcão!"
        );
    }
}
public class Ladino extends Heroi {

    @Override
    public void reagirABriga(Taverna taverna) {
        // O Ladino aproveita a confusão para roubar.
        taverna.perderDinheiroDoCaixa(15);

        this.fugirDaTaverna();

        System.out.println(
            "Ladino saqueou o caixa e sumiu nas sombras!"
        );
    }
}

O código responsável pela briga não precisa saber exatamente qual tipo de herói está sendo processado:

for (Heroi heroi : clientes) {
    heroi.reagirABriga(taverna);
}

Cada objeto executará sua própria versão de reagirABriga().

🕹️ O Menu a Cada Turno

O jogo funciona através de turnos, simulando o avanço do relógio.

A cada turno, o sistema apresenta o estado atual da taverna e aguarda uma decisão do jogador.

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
🔗 Como as Ações se Conectam com a POO
1. 🍺 Servir um cliente

O jogador seleciona um cliente.

Por exemplo:

barbaro.consumir(cervejaAna);

O objeto Barbaro interage com o objeto CervejaAna.

O consumo pode:

aumentar a embriaguez;
cobrar o ouro do cliente;
adicionar dinheiro ao caixa;
liberar espaço no balcão.
2. 🚪 Expulsar um cliente

O jogador pode tentar expulsar um cliente:

taverna.expulsar(ladino);

Dependendo do tipo de herói, o comportamento pode ser diferente.

Por exemplo, o Ladino pode tentar roubar algo antes de sair, enquanto outro personagem pode simplesmente ir embora reclamando.

Mais uma vez, o polimorfismo permite que cada classe tenha seu próprio comportamento.

3. 🧹 Acalmar o ambiente

O jogador pode gastar seu turno para diminuir o caos:

taverna.reduzirCaos();

Essa ação sacrifica uma oportunidade de ganhar dinheiro naquele turno, mas pode evitar uma briga geral.

Isso cria uma escolha estratégica:

Ganhar dinheiro agora ou evitar que a taverna seja destruída depois?

4. ⏭️ Ignorar e passar o tempo

O jogador também pode simplesmente não realizar uma ação importante e avançar o turno.

Isso permite que outros eventos aconteçam, como:

aumento do caos;
redução da paciência dos clientes;
chegada de novos heróis;
brigas;
mudanças no estado da taverna.
⚙️ Motor do Jogo — Game Loop

A interação com o jogador pode ser feita através da classe Scanner do Java ou de alguma biblioteca equivalente para leitura de entrada.

O programa funciona dentro de um laço de repetição enquanto a taverna estiver aberta e sua integridade for maior que zero.

while (taverna.estaAberta() && taverna.getIntegridade() > 0) {

    // 1. Imprime o status da Taverna

    // 2. Lê a escolha do jogador

    // 3. Resolve a ação escolhida

    // 4. Avança o relógio

    // 5. Diminui a paciência de quem não foi atendido

    // 6. Sorteia a chegada de novos heróis
}
🧩 Estrutura Geral do Sistema

Uma possível estrutura das principais classes seria:

Taverna
│
├── Heroi (abstrata)
│   ├── Barbaro
│   ├── Mago
│   └── Ladino
│
├── ItemConsumivel
│   ├── CervejaAna
│   ├── VinhoElf ico
│   └── CarneJavaliMisteriosa
│
└── Game Loop
🎯 Conceitos de POO Aplicados
Pilar	Aplicação no projeto
Encapsulamento	Proteção dos atributos da Taverna e controle através de métodos
Abstração	Classe abstrata Heroi e interface ItemConsumivel
Herança	Barbaro, Mago e Ladino herdando de Heroi
Polimorfismo	Cada herói possui sua própria implementação de reagirABriga()
🎮 Objetivo do Jogo

O jogador deve administrar a taverna durante os turnos, equilibrando:

💰 Dinheiro no caixa
🏆 Reputação
🏚️ Integridade da taverna
🌪️ Nível de caos
🍺 Satisfação dos clientes
⚔️ Risco de brigas

O objetivo é manter a taverna funcionando pelo maior tempo possível sem deixar sua integridade chegar a zero.

📚 Objetivo Acadêmico

Além de funcionar como um pequeno jogo de gerenciamento, o projeto tem como principal objetivo demonstrar, na prática, conceitos fundamentais de Programação Orientada a Objetos:

Classes e objetos
Encapsulamento
Abstração
Herança
Polimorfismo
Interfaces
Métodos e atributos
Composição e associação entre objetos
Controle de estado
Regras de negócio
Estruturas de repetição e interação com o usuário

O projeto busca transformar conceitos abstratos de POO em comportamentos concretos dentro de um sistema interativo.


