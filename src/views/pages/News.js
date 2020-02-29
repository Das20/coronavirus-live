"use strict";

import Utils from "../../services/Utils.js";

let News = {

    render: () => {
        return `
        <div class="container">
        <div class="row">
        <div class="col news">
          <table id="news" class="striped">
          <thead>
                  <tr>
                      <th>Regione</th>
                      <th>Casi confermati</th>
                  </tr>
                </thead>
            <tbody id="body">
              <tr id="row" style="display: none">
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
        const headerTitle = document.getElementById('header-title');
        headerTitle.innerText = 'News';
        var table = document.getElementById("body");
        let jsonResponse = await Utils.get(
          '/news.json',
        );
        var i = 0;
        for (let news of jsonResponse.news) {
            var rowT = table.insertRow(i);
            var cell1 = rowT.insertCell(0);
            var cell2 = rowT.insertCell(1);
            cell1.innerHTML = news.date;
            cell2.innerHTML = news.desc;
            i++;
        }
        $(document).ready( function () {
          $('#news').DataTable({
            retrieve: true,
        filter : false,
        order: [[0, 'desc']]
          });
        });
    }
    
};

export default News;