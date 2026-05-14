# Página de Jogos com HTML, CSS e JavaScript

---

## Disciplina: Programação Website I

## Tema: Frontend Inteligente com JavaScript

## Projeto: Criação de uma Página de Jogos Interativos

---

# 1. Objetivo do trabalho

Desenvolver uma **página web de jogos**, utilizando:

- HTML;
- CSS;
- JavaScript;
- manipulação do DOM;
- eventos de clique;
- arrays;
- funções;
- estruturas condicionais;
- lógica de repetição;
- `localStorage`;
- organização de arquivos.

O aluno deverá criar uma página principal chamada **Página de Jogos**, contendo cards ou botões de acesso para diferentes jogos desenvolvidos com JavaScript.

---

# 2. Jogos que deverão ser desenvolvidos

A página deverá conter **4 jogos obrigatórios**:

1. **Jogo Genius**
2. **Jogo da Velha**
3. **Jogo de Adivinhação de Número**
4. **Jogo Pedra, Papel e Tesoura**

---

# 3. Estrutura de pastas obrigatória

```
pagina-jogos-js/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
│
├── genius/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── jogo-da-velha/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── adivinhacao/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── pedra-papel-tesoura/
    ├── index.html
    ├── style.css
    └── script.js
```

---

# 4. Página principal — Página de Jogos

## Objetivo

Criar uma página inicial moderna, organizada e responsiva, contendo os jogos disponíveis.

A página principal deverá conter:

- título da página;
- breve descrição do projeto;
- cards para cada jogo;
- imagem, ícone ou ilustração de cada jogo;
- botão “Jogar”;
- layout responsivo;
- design profissional.

---

# 5. Jogo 1 — Genius

## Objetivo

Desenvolver uma versão web do jogo **Genius**.

O Genius é um jogo de memória em que o sistema mostra uma sequência de cores e o jogador deve repetir a sequência corretamente.

## Requisitos obrigatórios

O jogo deve conter:

- quatro botões coloridos;
- botão iniciar;
- área de mensagens;
- rodada atual;
- sequência aleatória;
- repetição da sequência pelo jogador;
- avanço de rodada;
- reinício ao errar;
- sistema de pontuação;
- maior pontuação salva com `localStorage`.

## Desafios obrigatórios

- adicionar sons para cada cor;
- criar efeito de brilho;
- criar tela de derrota;
- criar botão reiniciar;
- salvar recorde.

---

# 6. Jogo 2 — Jogo da Velha

## Objetivo

Criar o clássico **Jogo da Velha**, utilizando HTML, CSS e JavaScript.

## Requisitos obrigatórios

O jogo deve conter:

- tabuleiro 3x3;
- dois jogadores: X e O;
- alternância de turno;
- verificação de vitória;
- verificação de empate;
- botão reiniciar;
- mensagem informando o vencedor;
- destaque visual na combinação vencedora.

## Conceitos utilizados

- arrays;
- eventos de clique;
- condicionais;
- funções;
- manipulação de classes CSS;
- controle de estado do jogo.

---

# 7. Jogo 3 — Adivinhação de Número

## Objetivo

Criar um jogo em que o sistema sorteia um número aleatório e o jogador tenta adivinhar.

## Requisitos obrigatórios

O jogo deve conter:

- campo para digitar o palpite;
- botão para enviar resposta;
- número aleatório gerado pelo sistema;
- mensagens de dica:
    - “o número é maior”;
    - “o número é menor”;
    - “você acertou”;
- contador de tentativas;
- botão reiniciar;
- limite mínimo e máximo, por exemplo, de 1 a 100.

## Desafios obrigatórios

- criar níveis de dificuldade;
- salvar menor número de tentativas com `localStorage`;
- bloquear o campo após acertar;
- criar tela de vitória.

---

# 8. Jogo 4 — Pedra, Papel e Tesoura

## Objetivo

Criar o jogo **Pedra, Papel e Tesoura**, onde o jogador disputa contra o computador.

## Requisitos obrigatórios

O jogo deve conter:

- três botões: Pedra, Papel e Tesoura;
- escolha aleatória do computador;
- comparação entre jogador e computador;
- mensagem de vitória, derrota ou empate;
- placar do jogador;
- placar do computador;
- botão reiniciar placar.

## Regras do jogo

- Pedra vence Tesoura;
- Tesoura vence Papel;
- Papel vence Pedra.

## Desafios obrigatórios

- adicionar imagens ou ícones;
- criar animação ao escolher uma opção;
- salvar placar com `localStorage`;
- criar melhor de 3 ou melhor de 5.

---

# 9. Etapas obrigatórias do trabalho

O trabalho deverá ser desenvolvido em etapas.

---

## ETAPA 1 — HTML

Criar a estrutura das páginas:

- página principal;
- página do Genius;
- página do Jogo da Velha;
- página da Adivinhação;
- página do Pedra, Papel e Tesoura.

---

## ETAPA 2 — CSS

Criar uma interface visual bonita, moderna e responsiva.

O projeto deverá conter:

- cores bem definidas;
- botões estilizados;
- cards organizados;
- efeitos de hover;
- layout adaptável para celular;
- fontes legíveis;
- aparência profissional.

---

## ETAPA 3 — JavaScript básico

Implementar as primeiras interações:

- clique em botões;
- mensagens na tela;
- alteração de textos;
- alteração de classes CSS;
- sorteios simples;
- validações básicas.

---

## ETAPA 4 — JavaScript completo

Implementar a lógica final dos jogos:

- regras completas;
- pontuação;
- reinício;
- validação de vitória e derrota;
- armazenamento de dados com `localStorage`;
- organização do código em funções.

---

# 10. Entrega do trabalho

O aluno deverá entregar:

- link do repositório no GitHub;
- link da página publicada no GitHub Pages;
- projeto com todos os arquivos organizados;
- todos os jogos funcionando;
- layout responsivo.

---

# 11. Critérios de avaliação

| Critério | Valor |
| --- | --- |
| Organização dos arquivos | 1,0 |
| Página principal de jogos | 1,5 |
| Jogo Genius funcionando | 2,0 |
| Jogo da Velha funcionando | 1,5 |
| Jogo de Adivinhação funcionando | 1,5 |
| Pedra, Papel e Tesoura funcionando | 1,5 |
| Design, responsividade e acabamento visual | 1,0 |

**Total: 10 pontos**

---

# 12. Orientação final aos alunos

O trabalho deve ser feito em etapas:

1. criar primeiro a estrutura HTML;
2. depois aplicar o CSS;
3. depois testar interações simples;
4. por último implementar a lógica completa dos jogos;
5. publicar no GitHub Pages.

O objetivo principal é criar uma **página completa de jogos**, demonstrando domínio de HTML, CSS, JavaScript, organização de projeto e publicação real na internet.
