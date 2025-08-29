## O que é AOS?
- AOS (Animate On Scroll) é uma biblioteca JavaScript leve que permite adicionar animações em elementos HTML conforme eles entram na área visível da página (viewport) — fade, slide, zoom, flip, entre outros.
- Você consegue animar elementos sem escrever JavaScript complexo: basta configurar atributos diretamente no HTML.

## Instalação
### Opção 1. Via CDN (mais simples)
1. Acesse o site: https://michalsnik.github.io/aos/
2. Descer a tela até o final do site ou clicar no gatinho no quanto superior direito para abrir a pagina do gitHub
3. ``Ctrl + c`` o link do CDN/CSS disponível e ``Ctrl + v`` no ``<head>`` do html do projeto.
4. ``Ctrl + c`` o link do CDN/JS disponível e ``Ctrl + v`` antes do fechamento do ``</body>``.
5. Inicie o script com:
```
<script>
  AOS.init();
</script>
```
- **OBS:** Sempre verificar versão do CDN.
- **OBS:** Versão do CDN do gitHub desatualizada, mas sempre verificar.

### Opção 2. Com npm/Yarn (projetos modernos)
- Instalação: ``npm install aos --save`` ou ``yarn add aos``
- No JavaScript:
```
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
```