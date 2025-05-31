// Padrão JS

function Pokemon(nomeDoPokemon, tipoDoPokemon, donoDoPokemon) {
    this.nome = nomeDoPokemon;
    this.tipo = tipoDoPokemon;
    this.dono = donoDoPokemon;
}

const pikachu = new Pokemon("Pikachu", "Elétrico", "Sem dono")

console.log(pikachu);

// Padrão ES6

class Pokemon2 {
    // nome = '';
    // tipo = '';
    //#hp = 100;

    constructor(nomeDoPokemon2, tipoDoPokemon2, donoDoPokemon2) {
        this.nome = nomeDoPokemon2;
        this.tipo = tipoDoPokemon2;
        this.dono = donoDoPokemon2;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    // recebeuAtaque() {
    //     this.#hp -= 10;
    // }

    // exibeHp() {
    //     console.log(this.#hp);
    // }
}

class Pikachu extends Pokemon2 {
    #hpPikachu = 100;

    constructor() {
        super('Pikachu', 'Elétrico', 'Ash')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }

    recebeuAtaque() {
        this.#hpPikachu -= 10;
    }

    exibeHpDoPikachu() {
        console.log(`A vida do Pikachu é de ${this.#hpPikachu}`);
    }
}

class Charmander extends Pokemon2 {
    #hpCharmander = 100;

    constructor() {
        super('Charmander', 'Fogo', 'Sem Dono')
    }

    atacar() {
        console.log(`${this.nome} atacou com bola de fogo`)
    }

    recebeuAtaque() {
        this.#hpCharmander -= 10;
    }

    exibeHpDoCharmander() {
        console.log(`A vida do Charmander é de ${this.#hpCharmander}`);
    }
}

const pikachuDoAsh = new Pikachu();
const charmander = new Charmander();

// charmander.nome = 'Charmander';
// charmander.tipo = 'Fogo';

console.log(charmander);
charmander.exibeHpDoCharmander()
console.log(pikachuDoAsh);
pikachuDoAsh.exibeHpDoPikachu()
charmander.atacar()
pikachuDoAsh.recebeuAtaque()
pikachuDoAsh.exibeHpDoPikachu()
pikachuDoAsh.atacar()
charmander.recebeuAtaque()
charmander.exibeHpDoCharmander()
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh.hp)



console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon2);
console.log(pikachuDoAsh instanceof Pokemon);