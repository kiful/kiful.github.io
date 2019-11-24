var combobox = document.getElementById("selectNights");
console.log(combobox);
//Inicializar fecha hoy en input Check-In
InicializarCheckInHoy();
//Rellenando select noches
//-1º Populares
//--Header Popoulares
crearOptionNochesHeader("Popular durations")
//--Contenido
crearOptionNoches(4);
crearOptionNoches(7);
crearOptionNoches(10);
crearOptionNoches(14);
//-2º Daily
//--Header Daily
crearOptionNochesHeader("Daily")
//--Contenido
for (let i = 1; i < 21; i++) {
    crearOptionNoches(i)
}

//Funciones---------------------------
function crearOptionNoches(num) {
    var texto = "Nights " + num;
    option = document.createElement("option");
    option.setAttribute("value", num);
    option.setAttribute("label", texto);
    combobox.appendChild(option);
}
function crearOptionNochesHeader(texto) {
    option = document.createElement("option");
    option.setAttribute("label", texto);
    option.setAttribute("class", "font-weight-bold font-italic text-uppercase text-center")
    option.setAttribute("disabled", "true")
    combobox.appendChild(option);
}
function InicializarCheckInHoy(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('inputcheckin').value=ano+"-"+mes+"-"+dia;
}
$(function () {
    $('[data-toggle="popover"]').popover()
  })