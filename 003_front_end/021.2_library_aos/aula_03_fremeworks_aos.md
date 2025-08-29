## AOS em frameworks (opcional)
### React (usando Hook):
```
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return <div data-aos="zoom-in">Olá, React!</div>;
}
```


### Vue:
```
import AOS from 'aos';
import 'aos/dist/aos.css';

new Vue({
  mounted() {
    AOS.init();
  }
});
```

## Recapitulando
```
Etapa   |   Ação
-------------------------------
Instalação  →   CDN ou npm/yarn + AOS.init()
Aplicação   →   Usar data-aos="efeito" nos elementos HTML
Customização    →   Ajustar com data-aos-* ou opções em AOS.init()
Nos frameworks  →   Inicializar em React (useEffect) ou Vue (mounted)
```