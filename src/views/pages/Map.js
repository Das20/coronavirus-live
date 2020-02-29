"use strict";

let Map = {

    render: () => {
        return `
        <iframe class="mapGoogle" src="https://www.google.com/maps/d/u/0/embed?mid=1T0zFvL_LiXN4_Aqzp597PvpsykH4ECdN" width="640" height="480"></iframe>
        `
    }

    , after_render: async () => {
        const headerTitle = document.getElementById('header-title');
        headerTitle.innerText = 'Mappe';

    }
};

export default Map;