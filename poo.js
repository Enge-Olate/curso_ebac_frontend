class Veiculo{
    #honda = [];
    #caloi=[]
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    portas(){
        return 4;
    }
    cilindradas(){
        return this.#honda=[150, 300];
    }
    aros(){
        return this.#caloi=[17, 19, 22]
    }
}
class Carro extends Veiculo{
    #valor=45000;
    constructor(marca, modelo){
        super(marca, modelo);
    }
    valor(){
        return `Preço: ${this.#valor}`;
        
    }   
    qtyPortas(){
        return `Portas: ${this.portas()-2}`;
    }

}
class Moto extends Veiculo{
    constructor(marca, modelo){
        super(marca, modelo);
    }
    qtyCilindradas(){
        return `Cilindradas: ${this.cilindradas()[0]}`;
    }
}
class Bike extends Veiculo{
    constructor(marca, modelo) {
        super(marca, modelo);
    }
    tamanhoAro(){
        return `Aro: ${this.aros()[1]}`;
    }
}
const motocicleta = new Moto('Honda', 'CG Fan');
console.log(motocicleta);
console.log(motocicleta.qtyCilindradas());
console.log('------------------------');

const automovel = new Carro('Fiat', 'Palio');
console.log(automovel);
console.log(automovel.qtyPortas());
console.log(automovel.valor());
console.log('------------------------');
const bicicleta = new Bike('Caloi', 'Barra Forte');
console.log(bicicleta);
console.log(bicicleta.tamanhoAro());
