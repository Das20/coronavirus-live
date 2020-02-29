"use strict";

let Map = {

    render: () => {
        return `
        <div class="googlemap_wrap">
        <iframe class="" src="https://www.google.com/maps/d/u/0/embed?mid=1T0zFvL_LiXN4_Aqzp597PvpsykH4ECdN"></iframe>
        </div>
        `
    }

    , after_render: async () => {
        const headerTitle = document.getElementById('header-title');
        headerTitle.innerText = 'Mappa';

    }
};

export default Map;