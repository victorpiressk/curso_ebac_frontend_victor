### Atributo box sizing no CSS
- seletor {
- box-sizing: border-box;
- }

#### Significado valor border-box
- A borda e o padding devem fazer parte do conteúdo/tamanho do elemento
- Independente do tamanho da borda e do padding, não será possível interferir no tamanho do conteúdo

### Como resetar o CSS padrão da página
- \* {
- box-sizing: border-box;
- margin: 0;
- padding: 0;
- }