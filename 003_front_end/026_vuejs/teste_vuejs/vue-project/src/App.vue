<script setup>
import { reactive } from 'vue'

  const nome = 'Victor'
  const sobrenome = 'Pires'

  const meuObj = {
    nome: 'victor',
    sobrenome: 'Pires'
  }

  function dizOla(nome) {
    return `${nome} diz oi.`
  }

  const btnDesabilitado = false

  const imagem = "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/batman-calcada-da-fama.png?w=740"
  const imagem2 = "https://i.pinimg.com/564x/ca/e5/94/cae5943ada4d615afbc63a87f004e1fb.jpg"

  const imagemHabilitada = false
  const imagem2Habilitada = false

  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes: ['victor', 'paulo', 'luisa', 'monica'],
    nomeAInserir: '',
  })

  function incrementar() {
    estado.contador++
  }

  function decrementar() {
    estado.contador--
  }

  function alteraEmail(evento) {
    estado.email = evento.target.value
  }

  function valorTrasferencia(evento) {
    estado.transferindo = evento.target.value
  }

  function mostraSaldoFuturo() {
    return estado.saldo - estado.transferindo
  }

  function validaValorTransferencia() {
    return estado.saldo >= estado.transferindo
  }

  function cadastraNome() {
    if (estado.nomeAInserir.length >= 3) {
      estado.nomes.push(estado.nomeAInserir)
    } else {
      alert("Digite mais caracteres")
    }
  }

</script>

<template>
  <h1>{{nome}} {{ sobrenome }}</h1>
  <h2>{{ meuObj.nome }} {{ meuObj.sobrenome }}</h2>
  <p>
    {{ dizOla("Victor") }}
  </p>
  <button :disabled="btnDesabilitado">Enviar</button>
  <img v-if="imagemHabilitada" :src="imagem" alt="">
  <img v-else-if="imagem2Habilitada" :src="imagem2" alt="">
  <h3 v-else>Não curte herois da DC</h3>

  <br>
  <hr>
  <br>

  {{ estado.contador }}
  <button v-on:click="incrementar" type="button">+</button>
  <button v-on:click="decrementar" type="button">-</button>

  <br>
  <hr>
  <br>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>
  <br>

  <div class="container">
    <ul>
      <li>
        <span>Saldo: {{ estado.saldo }}</span> 
      </li>
      <li>
        <span>Transferindo: {{ estado.transferindo }}</span>
      </li>
      <li>
        <span>Saldo depois da tranferência: {{ mostraSaldoFuturo() }}</span>
      </li>
      <li>
        <input :class="{invalido: !validaValorTransferencia()}" @keyup="valorTrasferencia"  type="number" name="" placeholder="Quantia para transferir"></input>
      </li>
      <li>
        <button v-if="validaValorTransferencia()">Transferir</button>
        <span v-else>Valor maior que o saldo</span>
      </li>
    </ul>
  </div>

  <br>
  <hr>
  <br>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar nome</button>
</template>

<style scoped>
  .container ul {
    list-style: none;
  }

  img {
    max-height: 180px;
  }

  .invalido {
    outline-color: red;
    border-color: red;
    color: red;
  }
</style>