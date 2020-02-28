"use strict";

let BottomBar = {

    render: () => {
        return `
            <footer>
                <nav class="top-nav fixed-bottom-bar">
                    <div class="container">
                        <div class="nav-wrapper">
                            <div class="row menu">
                                <div class="col s12 center-align">
                                    <a class="btn-flat" href="#/tables"><i class="material-icons">search</i></a>
                                    <a class="btn-flat" href="#/map"><i class="material-icons">message</i></a>
                                    <a class="btn-flat" href="#/news"><i class="material-icons">add_box</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </footer>
        `
    }
};

export default BottomBar;