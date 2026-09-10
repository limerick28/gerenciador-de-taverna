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
