## O que é o plugin `grunt-replace`?
- O **`grunt-replace`** é um plugin para o **Grunt** que permite **substituir texto dentro de arquivos** de forma automatizada.  
- Ele é muito útil quando você precisa trocar trechos de código, variáveis ou até mesmo versões dentro dos seus arquivos antes de gerar o build final.

### Para que serve?
- Alterar **caminhos de arquivos** (por exemplo, trocar `/dev/` por `/prod/`).
- Substituir **variáveis** ou **placeholders** no HTML, CSS ou JS.
- Inserir **informações dinâmicas**, como versão do projeto, data, etc.
- Fazer ajustes rápidos no código durante o processo de build.

### Instalação
#### No terminal, dentro do projeto:
```
npm i --save-dev grunt-replace 
```

## Exemplo de configuração no Gruntfile.js
```
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Configuração do replace
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'versao',
              replacement: '<%= pkg.version %>' // pega versão do package.json
            },
            {
              match: /localhost:3000/g,
              replacement: 'meusite.com.br'
            }
          ]
        },
        files: [
            {
                expand: true, 
                flatten: true, 
                src: ['source/index.html'], 
                dest: 'build/'
            }
        ]
      }
    }
  });

  // Carregar plugin
  grunt.loadNpmTasks('grunt-replace');

  // Task padrão
  grunt.registerTask('default', ['replace']);
};
```

## Explicando
- patterns → lista de substituições.
- match: 'versao' → procura pela string @@versao ou <%= versao %>, dependendo da sintaxe.
- replacement: '<%= pkg.version %>' → substitui pelo valor da versão no package.json.
- Também pode usar expressões regulares (/localhost:3000/g).
- files → define os arquivos que vão ser modificados e onde salvar o resultado.

## Executando
### No terminal:
```
npm run grunt
```
- Isso gera os arquivos com as substituições já aplicadas na pasta build/.

## Resumo:
- O grunt-replace é um plugin para buscar e substituir textos.
- É útil para ajustes automáticos no código durante o build.
- Pode trabalhar com strings fixas ou expressões regulares.

## O que é `match`, `@@` e `replacement` no `grunt-replace`
- Quando você usa o **`grunt-replace`**, o processo sempre segue três passos principais:

### 1 `match` → **o que procurar**
- Define **o texto ou padrão** que o plugin deve localizar dentro do arquivo.
- Pode ser:
  - **String simples** → por padrão, procura por `@@nome` (ex.: `match: 'versao'` → procura `@@versao`).
  - **Expressão regular (RegExp)** → procura qualquer padrão de texto sem `@@`.
    - Ex.: `match: /API_KEY/g` → procura `API_KEY` literalmente.

---

### 2 `@@` → **o prefixo padrão**
- Quando `match` é **string**, o `grunt-replace` procura no arquivo pelo texto com prefixo `@@`.
  - Ex.: `match: 'autor'` procura por `@@autor`.
- Isso é só uma **convenção do plugin** para diferenciar variáveis de texto comum.
- Você pode:
  - **Manter** (usar `@@` sempre).
  - **Trocar o prefixo** (ex.: `prefix: '%%'` → `%%autor`).
  - **Remover o prefixo** (`usePrefix: false` → procura apenas `autor`).

---

### 3 `replacement` → **o que colocar no lugar**
- É o **valor de substituição**.
- Pode ser:
  - **Texto fixo**  
    ```
    { match: 'titulo', replacement: 'Meu Projeto' }
    ```
    Substitui `@@titulo` por `Meu Projeto`.

  - **Template do Grunt**  
    ```
    { match: 'versao', replacement: '<%= pkg.version %>' }
    ```
    Substitui `@@versao` pelo valor de `package.json`.

  - **Função** (para lógicas mais avançadas)  
    ```
    { match: /API_KEY/g, replacement: () => process.env.API_KEY }
    ```
    Substitui `API_KEY` pelo valor de uma variável de ambiente.

---

### 4 Exemplo genérico em **qualquer arquivo**

**Arquivo origem (`src/config.js`):**
```
const config = {
  apiKey: "@@API_KEY",
  env: "@@ENV",
  build: "@@BUILD"
};
```
#### Configuração (Gruntfile.js):
```
replace: {
  dist: {
    options: {
      patterns: [
        { match: 'API_KEY', replacement: '12345-ABCDE' },
        { match: 'ENV', replacement: 'production' },
        { match: 'BUILD', replacement: () => Date.now() }
      ]
    },
    files: [
      { src: 'src/config.js', dest: 'build/config.js' }
    ]
  }
}
```
#### Resultado (build/config.js):

```
const config = {
  apiKey: "12345-ABCDE",
  env: "production",
  build: "1724456789123"
};
```
### 5 Resumindo em qualquer contexto
- match → o que você quer encontrar (pode ser @@chave, texto puro ou regex).
- @@ → prefixo padrão usado quando o match é string (pode mudar ou desativar).
- replacement → o valor que vai substituir (string, template, função, etc).

#### Ou seja: procure X (match) → troque pelo Y (replacement).
#### O @@ é só uma convenção do plugin para marcar variáveis.



