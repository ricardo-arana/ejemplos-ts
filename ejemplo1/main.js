function Saludar(saludo) {
    this.saludo = saludo;
}

Saludar.prototype.decirHola = function () {
    return "Hola " + this.saludo;
}

let saludar = new Saludar({message: "mundo"});

let boton = document.createElement('button');

boton.textContent = "Saludar";

boton.onclick = function() {
    alert(saludar.decirHola());
}

document.body.appendChild(boton);