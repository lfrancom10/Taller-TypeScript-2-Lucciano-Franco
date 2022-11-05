

import { Series } from './series.js';

import { dataSeries } from './DataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalSeasonsElm: HTMLElement = document.getElementById("Avg-seasons")!;


btnfilterByName.onclick = () => applyFilterByName();

renderSeriesInTable(dataSeries);

totalSeasonsElm.innerHTML = `${getAvgSeasons(dataSeries)}`


function renderSeriesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.numero}</td>
                            <td>${serie.nombre}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporada}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearSeriesInTable();
  let coursesFiltered: Series[] = searchSerieByName(text, dataSeries);
  renderSeriesInTable(coursesFiltered);
}

function searchSerieByName(nameKey: string, series: Series[]) {
  return nameKey === '' ? dataSeries : series.filter( c => 
    c.nombre.match(nameKey));
}


function getAvgSeasons(series: Series[]): number {
  let totalCredits: number = 0;
  series.forEach((serie) => totalCredits = totalCredits + serie.temporada);
  totalCredits=totalCredits/8;
  return totalCredits;
}

function clearSeriesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}