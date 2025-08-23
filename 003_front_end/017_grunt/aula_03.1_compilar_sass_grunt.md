## Como compilar o SASS com o Grunt

- O **Grunt** também pode compilar arquivos **Sass (SCSS)** para CSS utilizando plugins específicos.
- Isso evita a compilação manual e agiliza o fluxo de desenvolvimento.

### Instalação do plugin SASS
- **Passo 1:** Abrir o terminal no projeto.
- **Passo 2:** Instalar o plugin `grunt-sass`:
```
npm i --save-dev grunt-sass
```
## Configuração no Gruntfile.js
### Estrutura básica para compilar SASS:
```
module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            development: {  // Ambiente de desenvolvimento
                options: {
                    style: 'expanded' // gera CSS legível
                },
                files: {
                    "build/styles/main.css": "source/styles/main.scss"
                }
            },
            production: {  // Ambiente de produção
                options: {
                    style: 'compressed' // gera CSS minificado
                },
                files: {
                    "build/styles/main.min.css": "source/styles/main.scss"
                }
            }
        }
    });

    // Carregar o plugin SASS
    grunt.loadNpmTasks('grunt-sass');

    // Registrar a tarefa padrão
    grunt.registerTask('default', ['sass:development']);
};
```
## Explicando a configuração
- sass: {} → objeto com configurações do compilador.
- development → CSS expandido e legível.
- production → CSS minificado para versão final.
- files: { "destino": "origem" }
- destino → arquivo CSS de saída.
- origem → arquivo SASS de entrada.

## Executar a compilação
- Para rodar em desenvolvimento:
```
npm run grunt
```
- Para rodar em produção:
```
grunt sass:production
```
## Diferença entre `grunt-sass` e `grunt-contrib-sass`

### 1. `grunt-contrib-sass`
- É o plugin **oficial** da equipe do Grunt.
- Usa o **Ruby Sass** (implementação original do Sass em Ruby).
- Exige que você tenha o **Ruby** instalado na sua máquina.
- Atualmente está **descontinuado**, pois o Sass deixou de ser mantido em Ruby → só existe suporte oficial para a versão em **Dart Sass**.
- Mais lento em relação às versões modernas.

---

### 2. `grunt-sass`
- Plugin alternativo, **não oficial**, mas mais utilizado atualmente.
- Usa o **Dart Sass** (implementação moderna e oficial do Sass).
- Não precisa instalar Ruby, funciona direto com Node.js.
- É mais rápido e atualizado com os recursos mais recentes do Sass.
- Totalmente mantido e recomendado para novos projetos.

---

### Qual a melhor opção?
- **Hoje em dia a melhor escolha é o `grunt-sass`**, porque:
  - O **Ruby Sass foi descontinuado** (desde 2019).
  - O Dart Sass (usado pelo `grunt-sass`) é a versão **oficial e mantida**.
  - Mais fácil de instalar → só precisa do Node.js (sem dependências extras como Ruby).
  - Mais rápido e confiável para builds modernos.

---

### Resumo:
- Se o professor usou `grunt-contrib-sass`, foi porque essa era a forma antiga e oficial.  
- Mas atualmente você deve usar **`grunt-sass`**, pois é o padrão moderno e suportado.