## Configuração parcel build
### Configurar parcel no package.json:
- Configuração de build parcel: ``"build": "parcel build src/index.html",``
- **OBS:** Não tem a necessidade de acicionar os outros caminhos na configuração, pois o parcel identifica quais as dependencias pelo html

### Executar parcel build
1. Acessar a pasta do projeto pelo terminal.
2. Executar comando de build em dev: ``npm run build``