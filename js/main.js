




let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en precio";

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
// txtNombre.value = "Leche Deslactosada";

// let campos = document.getElementsByClassName("campo");
// campos[0].value = "Leche Descremada";
// console.log(campos);

// for (let i = 0; i < campos.length; i++) {
//     campos[i].style.border = "red thin solid";
// }

// let spans = document.getElementsByTagName("span");
// for (let i = 0; i < spans.length; i++) {
//     console.log(spans[i].textContent);
// }

//tablaCompras

let tabla = document.getElementById("tablaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML = `
//     <tr>
//     <th scope="row">1</th>
//     <td>Leche</td>
//     <td>3</td>
//     <td>$ 23.00</td>
//     </tr>
//     <tr>
// `;

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener( "click", (event) =>  {
    let precio = Math.floor(Math.random() * 50);    
    let tmp = `
    <tr>
    <th scope="row">1</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
    </tr>
    <tr>
`
    cuerpoTabla[0].innerHTML += tmp;
    console.log(txtNombre.value, txtNumber.value);

    txtNombre.value = "";
    txtNumber.value = "";
    txtNombre.focus();

});
console.log(btnAgregar);