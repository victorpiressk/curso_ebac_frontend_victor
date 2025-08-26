## Contruir emails com html
- Construir emails com HTML tem algumas diferenças em relação a criar páginas web normais, porque os clientes de e-mail (Gmail, Outlook, Apple Mail, etc.) têm limitações e não suportam todos os recursos modernos de HTML e CSS.

## Como construir emails com HTML?
- Emails em HTML são versões formatadas (coloridas, com imagens e estilos) de mensagens enviadas por marketing, notificações ou comunicação.
- Diferente de sites normais, eles precisam ser compatíveis com dezenas de clientes de e-mail diferentes.

### Características principais
- HTML simplificado → nem todos os elementos são suportados.
- CSS inline → estilos aplicados diretamente no elemento.
- Tabelas para layout → ainda são a forma mais segura de criar estruturas.
- Evitar JavaScript → a maioria dos clientes de e-mail bloqueia scripts por segurança.
- Imagens hospedadas → não podem ser locais, precisam estar em um servidor acessível.

## Estrutura básica de um email em HTML
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Email Exemplo</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background:#f4f4f4;">
    <center>
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center">
            <!-- Container -->
            <table width="600" border="0" cellspacing="0" cellpadding="20" style="background:#ffffff;">
              <tr>
                <td align="center" style="background:#007bff; color:#ffffff; font-size:24px;">
                  Newsletter EBAC
                </td>
              </tr>
              <tr>
                <td style="font-size:16px; color:#333;">
                  <p>Olá, Victor!</p>
                  <p>Esse é um <b>email em HTML</b> construído com boas práticas.</p>
                  <p>
                    <a href="https://ebac.com.br" style="color:#007bff; text-decoration:none;">
                      Clique aqui para saber mais
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td align="center" style="background:#f0f0f0; font-size:12px; color:#666;">
                  &copy; 2025 EBAC - Todos os direitos reservados.
                </td>
              </tr>
            </table>
            <!-- Fim Container -->
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
```
## Ferramentas úteis
- MJML → framework que gera HTML para email responsivo.
- Litmus ou Email on Acid → testam como o email aparece em vários clientes.
- Mailchimp / Sendgrid → plataformas que facilitam a construção e envio.

## Boas práticas
- Utilização da tag center para centralizar o conteúdo da tabela.
- Usar tabelas para estruturar o conteúdo → melhor compatibilidade.
- Sempre usar largura fixa (600px é o padrão) para manter o design estável.
- Aplicar CSS inline, porque muitos clientes ignoram <style>.
- Usar textos alternativos (alt) em imagens, já que alguns clientes bloqueiam imagens por padrão.
- Testar em vários clientes (Gmail, Outlook, Yahoo, Apple Mail).