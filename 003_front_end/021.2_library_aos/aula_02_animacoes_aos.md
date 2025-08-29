## Como aplicar animações 
### Opções de efeitos mais populares
- Adicione atributos data-aos e configure os efeitos diretamente no HTML:
```
<div data-aos="fade">Animado ao aparecer</div>
<div data-aos="fade-up">Animado ao aparecer</div>
<div data-aos="fade-down">Animado ao aparecer</div>
<div data-aos="slide-right">Animado ao aparecer</div>
<div data-aos="zoom-in">Animado ao aparecer</div>
```
- **OBS:** Verificar mais opções de animações no site: https://michalsnik.github.io/aos/

### Atributos de customização:
- ``data-aos-duration="1000"`` → duração da animação em milissegundos (50–3000, passo 50ms)
- ``data-aos-delay="200"`` → atraso antes da animação
- ``data-aos-offset="200"`` → distância do elementos antes de iniciar a animação
- ``data-aos-easing="ease-in-out"`` → controle do easing
- ``data-aos-once="true"`` → anima apenas uma vez ao aparecer

### Configurações globais com AOS.init():
```
AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
});
```