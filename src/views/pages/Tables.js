"use strict";

import Utils from "../../services/Utils.js";

let Tables = {

  render: () => {
    return `
            <div class="container">
            <div class="row">
            <div class="col s6">
              <table id="myTable" class="highlight centered">
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
    let jsonResponse = await Utils.get(
      '/test.json',
    );
    var i = 0;
    for (let regione of jsonResponse.italia.regioni) {
      for (let provincia of regione.province) {
        var table = document.getElementById("body");
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
      }
    }
    $(document).ready( function () {
    var table = $('#myTable').DataTable({
        bPaginate : false
      });
      table
      .column('1:visible')
      .order('desc')
      .draw();
    });
  }
};

export default Tables;