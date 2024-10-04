// pedir al usuario diámetro y grosor
/*  Crea un script que pida al usuario el diámetro de una rueda y su grosor (en
metros) y a través de condicionales if realice las siguientes operaciones:
a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para
un vehículo pequeño”.
b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es
menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”*/

let diametro = parseFloat(prompt("Dame el diámetro de la rueda")); 
let grosor = parseFloat(prompt("Dame el grosor de la rueda"));
//tratamiento del diámetro de la rueda y posibles opciones
if (diametro > 1.4) {
    alert("La rueda es para un vehículo grande");
} else if (diametro > 0.8 && diametro <= 1.4) {
    alert("La rueda es para un vehículo mediano");
} else {
    alert("La rueda es para un vehículo pequeño");
}

//tratamiento del diámetro y grosor de la rueda
if ((diametro > 1.4 && grosor <0.4) || (diametro >0.8 && diametro <=1.4 && grosor <0.25)){
    alert("El grosor para esta rueda es inferior al recomendado");
} else {
    alert("El grosor para esta rueda es  el recomendado")
}