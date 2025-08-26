## O que é o Litmus?
- Plataforma online para testes, otimização e monitoramento de emails.
- Permite ver como o email vai se comportar em mais de 90 clientes e dispositivos.
- Ajuda a encontrar erros de renderização, problemas de CSS inline e bloqueio de imagens.

## Como testar emails com Litmus?
### Passo 1 – Criar conta
- Acesse https://www.litmus.com
- Crie uma conta (eles oferecem teste gratuito).

### Passo 2 – Criar novo teste
- No painel do Litmus, clique em "Create New Email".
- Você pode escolher:
    - Paste Your Code → copiar e colar seu HTML direto no editor.
    - Upload HTML File → enviar o arquivo .html.
    - Send to Litmus → enviar o email para um endereço especial fornecido pelo Litmus.

### Passo 3 – Verificar a renderização
- O Litmus gera screenshots reais do seu email em:
    - Gmail (web e app)
    - Outlook (várias versões)
    - Apple Mail (Mac e iPhone/iPad)
    - Yahoo, AOL, Thunderbird, etc.

### Passo 4 – Testar links e imagens
- O Litmus também verifica:
    - Se links estão funcionando.
    - Se imagens estão sendo carregadas.
    - Se o email passa em filtros de spam.

### Passo 5 – Ajustar e validar
- Faça ajustes no seu HTML.
- Refaça o teste até que esteja compatível em todos os clientes de email desejados.

## Boas práticas ao usar o Litmus
- Sempre testar antes de disparar campanhas grandes.
- Validar responsividade (como o email se adapta em telas pequenas).
- Usar a aba de analytics do Litmus (se disponível no plano) para ver taxa de abertura, cliques e engajamento real.

#### **Dica:** Se você não quiser pagar pelo Litmus, uma alternativa gratuita é o Mailtrap Email Sandbox ou o Email on Acid (também tem versão trial).

## Hospedar imagens para e-mails com Git + Vercel (passo a passo)
- A ideia: criar um repositório **apenas com arquivos estáticos** (principalmente imagens), subir no **GitHub** e **deploy** na **Vercel**. 
- Assim você terá **URLs HTTPS públicas** para usar no `<img src="...">` dos seus e-mails.

## 1 Preparar a pasta do projeto

### **Estrutura sugerida:**
```
email-assets/
├─ images/
│ ├─ logo.png
│ ├─ banner-hero.jpg
│ └─ icone-facebook.png
├─ index.html (opcional, só para visualizar no navegador)
└─ vercel.json (opcional, headers de cache)
```

### **Boas práticas de nomes de arquivos**
- use **kebab-case**: `banner-hero.jpg`  
- evite espaços, acentos e caracteres especiais  
- mantenha imagens otimizadas (≤ 150–300 KB quando possível)

## 2 Iniciar o Git e subir no GitHub

No terminal, dentro da pasta `email-assets/`:
```
git init
git add .
git commit -m "chore: inicializa repositório de assets para e-mail"
git branch -M main
# crie um repositório vazio no GitHub com o mesmo nome (email-assets)
git remote add origin https://github.com/<seu-usuario>/email-assets.git
git push -u origin main
```

## 3 Configurar a Vercel
1. Crie uma conta em vercel.com (login com GitHub facilita).
2. Clique em “Add New…” → Project”.
3. Escolha o repositório email-assets do GitHub.
4. Framework Preset: selecione “Other” (projeto estático).
5. Build & Output Settings:
    - Build Command: deixe em branco (não há build).
    - Output Directory: deixe ./ (raiz) ou vazio (Vercel detecta estático).
6. Clique em Deploy.

#### Após o deploy, suas imagens ficarão acessíveis em:
```
https://<seu-projeto>.vercel.app/images/logo.png
```
## 4 (Opcional) Configurar cache forte para imagens
### Crie um vercel.json na raiz para definir headers de cache:
```
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### Commite e faça um novo push:
```
git add vercel.json
git commit -m "chore: adiciona cache forte para /images"
git push
```

## 5 Usar as imagens no HTML do e-mail
### Exemplo de <img> seguro para e-mail (com URLs absolutas, alt, width/height e estilos inline):
```
<img
  src="https://<seu-projeto>.vercel.app/images/logo.png"
  alt="Sua Marca"
  width="120"
  height="40"
  style="display:block;border:0;outline:none;text-decoration:none;"
>
```
### Por que absolutas?
- Clientes de e-mail (Gmail/Outlook) exigem URLs públicas e completas (com https://).
- Evite caminhos relativos tipo images/logo.png.

## 6 Atualizar imagens no futuro
1. Adicione/edite arquivos em images/.
2. Faça commit e push:
```
git add images/
git commit -m "feat: adiciona banner de lançamento"
git push
```
3. A Vercel faz novo deploy automaticamente.
    - A URL permanece estável (se o nome do arquivo não mudar).

## 7 Dicas importantes para e-mail
- Tamanho: mantenha as imagens leves (100–300 KB).
- Dimensões: defina width e height no <img> para evitar “layout shift”.
- Formato: JPG/PNG são universalmente suportados; evite SVG em e-mails (muitos clientes bloqueiam).
- Texto alternativo: sempre use alt, pois muitos clientes bloqueiam imagens por padrão.
- Sem query string: prefira URLs limpas (sem ?param=...) para evitar bloqueios de alguns clientes.

## 8 (Opcional) Domínio próprio
### Para melhorar a entrega/branding, adicione um domínio customizado:
1. Na Vercel, vá em Project → Settings → Domains.
2. Adicione images.seudominio.com.
3. Aponte o DNS conforme instruções.
4. Suas URLs ficarão assim:
```
https://images.seudominio.com/images/logo.png
```

## 9 (Opcional) Página de visualização
### Um index.html simples para pré-visualizar as imagens no navegador:
```
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Assets de E-mail</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>body{font-family:Arial,sans-serif;padding:24px} img{max-width:320px;display:block;margin:12px 0}</style>
</head>
<body>
  <h1>Imagens disponíveis</h1>
  <img src="./images/logo.png" alt="Logo">
  <img src="./images/banner-hero.jpg" alt="Banner Hero">
</body>
</html><!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Assets de E-mail</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>body{font-family:Arial,sans-serif;padding:24px} img{max-width:320px;display:block;margin:12px 0}</style>
</head>
<body>
  <h1>Imagens disponíveis</h1>
  <img src="./images/logo.png" alt="Logo">
  <img src="./images/banner-hero.jpg" alt="Banner Hero">
</body>
</html>
```

### Acesse:
```
https://<seu-projeto>.vercel.app/
```

## 10 Checklist rápido
- Repositório Git criado e publicado no GitHub
- Projeto importado na Vercel como estático
- Imagens em /images/ com nomes limpos
- (Opcional) vercel.json com cache para imagens
- URLs absolutas inseridas no HTML do e-mail
- Testado no Litmus/Email on Acid/Mailtrap

## Exemplo final de <img> pronto para e-mail
```
<img
  src="https://email-assets-yourname.vercel.app/images/banner-hero.jpg"
  alt="Promoção Especial"
  width="600"
  height="280"
  style="display:block;border:0;outline:none;text-decoration:none;"
>
```