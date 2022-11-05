import { dataSeries } from './DataSeries.js';
var CuerpoSerie = document.getElementById('SERIES_TV');
var button_buscar = document.getElementById("button_buscar");
var cuadro_busqueda = document.getElementById("cuadro_busqueda");
var Promedio_per_seasons = document.getElementById("Promedio_per_seasons");
button_buscar.onclick = function () { return filtrarNombre(); };
actualizaTabla(dataSeries);
Promedio_per_seasons.innerHTML = "".concat(prom_series(dataSeries));
function actualizaTabla(series) 
{
    console.log('Mostrando las series de televisión');	
    series.forEach(function (serie) 
    {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>".concat(serie.numero, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporada, "</td>");
        CuerpoSerie.appendChild(tr);
    });
}
function filtrarNombre() 
{
    var text = cuadro_busqueda.value;
    text = (text == null) ? '' : text;
    limpiarTablar();
    var filtrada = buscarPorName(text, dataSeries);
    actualizaTabla(filtrada);
}
function buscarPorName(nombre, series) 
{
    return nombre === '' ? dataSeries : series.filter(function (c) 
    {
        return c.nombre.match(nombre);
    });
}
function prom_series(series) 
{
    var promedio = 0;
    series.forEach(function (series) { return promedio = promedio + series.temporada; });
    promedio = promedio / 8;
    return promedio;
}
function limpiarTablar() 
{
    while (CuerpoSerie.hasChildNodes()) 
    {
        if (CuerpoSerie.firstChild != null) 
        {
            CuerpoSerie.removeChild(seriesTbody.firstChild);
        }
    }
}
