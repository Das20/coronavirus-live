"use strict";

let News = {

    render: () => {
        return `
            <div class="no-elements">
                <h5>Work in progress..</h5>
            </div>  
        `
    }

    , after_render: async () => {
        const headerTitle = document.getElementById('header-title');
        headerTitle.innerText = 'News';
    }
};

export default News;