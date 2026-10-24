# Yorokobi Studio — Site v0.0.2

Primeira amostra navegável do reposicionamento da Yorokobi Studio: de estúdio focado em visual novels para parceiro independente de programação e co-development de jogos.

## Como visualizar

1. Extraia **todo** o ZIP, mantendo a estrutura de pastas.
2. Abra `index.html` em um navegador moderno (Chrome, Edge, Firefox ou Safari).
3. Alternativamente, use um servidor estático local (recomendado para simular hospedagem):

   ```bash
   python -m http.server 8000
   ```

   Acesse `http://localhost:8000`.

Não é necessário Node.js, compilação, cadastro ou nenhuma biblioteca JavaScript. As fontes do Google são opcionais: se estiver sem internet, o site utiliza fontes de reserva.

## Organização

```
index.html                     Página inicial em inglês
assets/css/style.css           Toda a identidade visual, componentes e responsividade
assets/js/main.js              Menu, navegação, revelação das seções e ano dinâmico
assets/img/                    Emblema, imagem do logo e arte real do portfólio
assets/img/adrian-santos.png   Retrato de Adrian Santos fornecido para esta versão
assets/favicon/                Favicons do pacote original
docs/CHANGELOG.md              Histórico de mudanças
docs/ROADMAP.md                Ideias e critérios para os próximos incrementos
previews/                     Capturas da primeira dobra (desktop / mobile)
VERSION                       Versão do pacote
```

## Elementos preservados

- Paleta original fornecida: `#F6CAD1`, `#F1DCA4`, `#EF9AA9`, `#F3E7CD`, `#E67494`, `#E55F73`, `#D51A3D`, `#CEA251`, `#FBFBFA`, `#DCDCD4`.
- Emblema principal do tsuru extraído da imagem original enviada. Há também uma cópia integral do original em `assets/img/yorokobi-original.jpg`.
- Capa real de *The Last Boat* e referência editorial a *Angel's Tears* (a arte em gradiente para este último é conceitual, NÃO uma imagem do jogo).
- Endereço de contato: `contact@yorokobistudio.com`.

## Escopo e limites da versão 0.0.2

- É uma **landing page estática e responsiva** com navegação por seções.
- A seção pessoal apresenta Adrian Santos, sua atuação como desenvolvedor e seu GitHub público.
- Todos os botões comerciais abrem o cliente de e-mail; **não há backend nem formulário de envio**.
- Não são apresentados clientes, métricas ou certificações não verificados. Os títulos exibidos são projetos originais, não cases de prestação de serviços.
- A linguagem e as descrições dos serviços são propostas editoriais, sujeitas a revisão conforme as competências e ofertas reais do estúdio.
- Referências de direção: Visual Arts (editorial/japonesa), Indie Level Studio (estrutura comercial), Blind Squirrel (tipografia e apresentação de projetos). Implementação visual e código são originais.
- Revise copy, termos/privacidade aplicáveis e configuração de hospedagem a cada nova publicação.

## Critérios de versionamento

- `0.0.x`: protótipos incrementais, validação do design, conteúdo e funcionalidade.
- `0.1.0`: primeira versão aprovada pelo usuário para operar como base estável.
- `0.1.x`: atualizações e melhorias a partir dessa base.
- Cada versão deve manter **CHANGELOG**, código-fonte, identidade visual e um ZIP completo autossuficiente.

## Créditos e uso de ativos

O design, HTML, CSS e JS desta amostra são novos. Os elementos visuais da marca, a capa de *The Last Boat* e o retrato de Adrian Santos derivam dos ativos disponibilizados para este projeto. Nenhum material visual dos três sites de referência foi copiado.
