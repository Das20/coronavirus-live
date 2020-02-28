"use strict";

let Map = {

    render: () => {
        return `
            <div class="no-elements">
                <h5>Mappa</h5>
            </div>  
        `
    }

    , after_render: async () => {
        const headerTitle = document.getElementById('header-title');
        headerTitle.innerText = 'Mappe';

    }
};

export default Map;