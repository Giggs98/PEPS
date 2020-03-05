
function Calificar1() {
    document.getElementById("SCantidad1").disabled = true
    document.getElementById("SVUnidad1").disabled = true 
}
function Calificar2() {
    document.getElementById("ECantidad1").disabled = true
    document.getElementById("EVUnidad1").disabled = true
}
function Calificar3() {
    document.getElementById("SCantidad2").disabled = true
    document.getElementById("SVUnidad2").disabled = true
      
}
function Calificar4() {
    document.getElementById("ECantidad2").disabled = true
    document.getElementById("EVUnidad2").disabled = true
    
}
function Calificar5() {
    document.getElementById("SCantidad3").disabled = true
    document.getElementById("SVUnidad3").disabled = true 
}
function Calificar6() {
    document.getElementById("ECantidad3").disabled = true
    document.getElementById("EVUnidad3").disabled = true
}
function Calificar7() {
    document.getElementById("SCantidad4").disabled = true
    document.getElementById("SVUnidad4").disabled = true
    
}
function Calificar8() {
    document.getElementById("ECantidad4").disabled = true
    document.getElementById("EVUnidad4").disabled = true

}
function Calificar9() {
    document.getElementById("SCantidad5").disabled = true
    document.getElementById("SVUnidad5").disabled = true
   
}
function Calificar10() {
    document.getElementById("ECantidad5").disabled = true
    document.getElementById("EVUnidad5").disabled = true

}

function Calcular(){
    var ecantidad1 = document.getElementById("ECantidad1").value
    var ecantidad2 = document.getElementById("ECantidad2").value
    var ecantidad3 = document.getElementById("ECantidad3").value
    var ecantidad4 = document.getElementById("ECantidad4").value
    var ecantidad5 = document.getElementById("ECantidad5").value

    var evunidad1 = document.getElementById("EVUnidad1").value
    var evunidad2 = document.getElementById("EVUnidad2").value
    var evunidad3 = document.getElementById("EVUnidad3").value
    var evunidad4 = document.getElementById("EVUnidad4").value
    var evunidad5 = document.getElementById("EVUnidad5").value

    var scantidad1 = document.getElementById("SCantidad1").value
    var scantidad2 = document.getElementById("SCantidad2").value
    var scantidad3 = document.getElementById("SCantidad3").value
    var scantidad4 = document.getElementById("SCantidad4").value
    var scantidad5 = document.getElementById("SCantidad5").value

    var svunidad1 = document.getElementById("SVUnidad1").value
    var svunidad2 = document.getElementById("SVUnidad2").value
    var svunidad3 = document.getElementById("SVUnidad3").value
    var svunidad4 = document.getElementById("SVUnidad4").value
    var svunidad5 = document.getElementById("SVUnidad5").value

    var etunidad1 = parseFloat(ecantidad1) * parseFloat(evunidad1)
    var etunidad2 = parseFloat(ecantidad2) * parseFloat(evunidad2)
    var etunidad3 = parseFloat(ecantidad3) * parseFloat(evunidad3)
    var etunidad4 = parseFloat(ecantidad4) * parseFloat(evunidad4)
    var etunidad5 = parseFloat(ecantidad5) * parseFloat(evunidad5)

    var stunidad1 = parseFloat(scantidad1) * parseFloat(svunidad1)
    var stunidad2 = parseFloat(scantidad2) * parseFloat(svunidad2)
    var stunidad3 = parseFloat(scantidad3) * parseFloat(svunidad3)
    var stunidad4 = parseFloat(scantidad4) * parseFloat(svunidad4)
    var stunidad5 = parseFloat(scantidad5) * parseFloat(svunidad5)

    var sacantidad1 = parseFloat(ecantidad1) - parseFloat(scantidad1)
    var sacantidad2 = parseFloat(ecantidad2) - parseFloat(scantidad2)
    var sacantidad3 = parseFloat(ecantidad3) - parseFloat(scantidad3)
    var sacantidad4 = parseFloat(ecantidad4) - parseFloat(scantidad4)
    var sacantidad5 = parseFloat(ecantidad5) - parseFloat(scantidad5)

    var saunidad1 = parseFloat(evunidad1) + parseFloat(svunidad1)
    var saunidad2 = parseFloat(evunidad2) + parseFloat(svunidad2)
    var saunidad3 = parseFloat(evunidad3) + parseFloat(svunidad3)
    var saunidad4 = parseFloat(evunidad4) + parseFloat(svunidad4)
    var saunidad5 = parseFloat(evunidad5) + parseFloat(svunidad5)

    var satotal1 = parseFloat(etunidad1) - parseFloat(stunidad1)
//--------------------------------------------------------------------
    document.getElementById("ETUnidad1").value = etunidad1
    document.getElementById("ETUnidad2").value = etunidad2 
    document.getElementById("ETUnidad3").value = etunidad3 
    document.getElementById("ETUnidad4").value = etunidad4 
    document.getElementById("ETUnidad5").value = etunidad5 

    document.getElementById("STUnidad1").value = stunidad1 
    document.getElementById("STUnidad2").value = stunidad2 
    document.getElementById("STUnidad3").value = stunidad3 
    document.getElementById("STUnidad4").value = stunidad4 
    document.getElementById("STUnidad5").value = stunidad5 
//----------------------------Parte Columna 1--------------------------------------------
    document.getElementById("SaCantidad1").value = sacantidad1
    document.getElementById("SaUnidad1").value = saunidad1
    document.getElementById("SaTotal1").value = satotal1
    if (satotal1 < 0) {
        alert("Error en almacen")
    }
//-----------------------------Columna 2------------------------------------
    var fil2 = sacantidad1 + sacantidad2
    var tfil2 = fil2 * saunidad2
    document.getElementById("SaCantidad2").value = fil2
    document.getElementById("SaUnidad2").value = saunidad2
    document.getElementById("SaTotal2").value = tfil2
    if (tfil2 < 0) {
        alert("Error en almacen")
    }
////-----------------------------Columna 3------------------------------------
    var fil3 = fil2 + sacantidad3
    var tfil3 = fil3 * saunidad2
    document.getElementById("SaCantidad3").value = fil3
    document.getElementById("SaUnidad3").value = saunidad3
    document.getElementById("SaTotal3").value = tfil3
    if (tfil3 < 0) {
        alert("Error en almacen")
    }
//-----------------------------Columna 4------------------------------------
    var fil4 = fil3 + sacantidad4
    var tfil4 = fil4 * saunidad4
    document.getElementById("SaCantidad4").value = fil4
    document.getElementById("SaUnidad4").value = saunidad4
    document.getElementById("SaTotal4").value = tfil4
    if (tfil4 < 0) {
        alert("Error en almacen")
    }
//-----------------------------Columna 5------------------------------------
    var fil5 = fil4 + sacantidad5
    var tfil5 = fil5 * saunidad5
    document.getElementById("SaCantidad5").value = fil5
    document.getElementById("SaUnidad5").value = saunidad5
    document.getElementById("SaTotal5").value = tfil5
    if (tfil5 < 0) {
        alert("Error en almacen")
    }
}
