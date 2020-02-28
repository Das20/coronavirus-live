"use strict";

import Utils from "../../services/Utils.js";

let Tables = {

    render: () => {
        return `
            <div class="tables">
                <p style="display: none">Tabella</p>
            </div>        
        `
    }

    , after_render: async () => {
        const headerTitle = document.querySelector('#header-title');
        const tables = document.querySelector(".tables");
        const element = tables.firstElementChild;
        headerTitle.innerText = 'Dati';
        let jsonResponse = await Utils.get(
            '/test.json',
        );
        for (let regione of jsonResponse.italia.regioni) {
            for (let provincia of regione.province) {
                let cln = element.cloneNode(true);
                cln.innerText = regione.nome + ' ' + provincia.nome + ' ' + provincia.morti;
                tables.appendChild(cln);
                cln.style.display = 'block';
            }
        }
    }
};

export default Tables;