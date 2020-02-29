"use strict";

import Utils from "../../services/Utils.js";

let Tables = {

  render: () => {
    return `
            <div class="container">
            <div class="row">
            <div class="col tableC">
              <table id="myTable" class="striped">
                <thead>
                  <tr>
                      <th>Regione</th>
                      <th>Casi confermati</th>
                      <th>Morti</th>
                      <th>Guariti</th>
                  </tr>
                </thead>
                <tbody id="body">
                  <tr id="row" style="display: none">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>         
            </div>         
            </div>         
        `
  }

  , after_render: async () => {
    const headerTitle = document.querySelector('#header-title');
    headerTitle.innerText = 'Dati';
    var table = document.getElementById("body");
    let jsonResponse = await Utils.get(
      '/test.json',
    );
    var i = 0;
    var sumC = 0;
    var sumM = 0;
    var sumG = 0;
    for (let regione of jsonResponse.italia.regioni) {
      for (let provincia of regione.province) {
        var rowT = table.insertRow(i);
        var cell1 = rowT.insertCell(0);
        var cell2 = rowT.insertCell(1);
        var cell3 = rowT.insertCell(2);
        var cell4 = rowT.insertCell(3);
        cell1.innerHTML = regione.nome;
        cell2.innerHTML = provincia.casi;
        cell3.innerHTML = provincia.morti;
        cell4.innerHTML = provincia.curati;
        i++;
        sumC += provincia.casi;
        sumM += provincia.morti;
        sumG += provincia.curati;
      }
    }
    var rowT = table.insertRow(i);
    var cell1 = rowT.insertCell(0);
    var cell2 = rowT.insertCell(1);
    var cell3 = rowT.insertCell(2);
    var cell4 = rowT.insertCell(3);
    cell1.innerHTML = "TOTALE :";
    cell2.innerHTML = sumC;
    cell3.innerHTML = sumM;
    cell4.innerHTML = sumG;

    $(document).ready( function () {
      $('#myTable').DataTable({
        retrieve: true,
        bPaginate : false,
        filter : false,
        order: [[1, 'desc']]
      });
    });
  }
};

export default Tables;