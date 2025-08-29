## Compressão de imagens
### 1. Criar arquivo sharp.config.json:
- Na raiz do projeto (mesmo nível do package.json), crie o arquivo sharp.config.json.
- Adicione uma configuração inicial, por exemplo:
```
{
  "jpeg": {
    "quality": 80
  },
  "png": {
    "quality": 80,
    "compressionLevel": 8
  },
  "webp": {
    "quality": 75
  }
}
```
### 2. Configurar package.json:
- No package.json, adicione scripts para rodar o Parcel:
```
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}
```
### 3. Rodar em modo desenvolvimento:
- Execute: ``npm run dev``
- Isso inicia o servidor interno do Parcel (sem compressão de imagens, apenas preview).

### 4. Rodar build com compressão:
- Para gerar a versão final com imagens comprimidas, rode: ``npm run build``
- O Parcel cria a pasta dist/ contendo HTML, JS, CSS e imagens otimizadas segundo o sharp.config.json.

## Observação importante:
- A compressão de imagens só acontece no parcel build, não no parcel serve.
- O sharp.config.json permite ajustar nível de qualidade para cada tipo de arquivo (JPEG, PNG, WebP, AVIF etc.).

---

**Recomendação:** configure o sharp.config.json na raiz do projeto com os parâmetros adequados de compressão.
**Próxima etapa**: rode npm run build e verifique na pasta dist/ se as imagens estão menores e não corrompidas.Criar sharp.config.json
