let C = {};

C.init = function() {
    V.init();
};

let V = {

};

V.addEventListeners = function() {
    document.querySelector('#projet-iconographie').addEventListener('click', function() {
        C.handleIconographieClick();
    });
    document.querySelector('#projet-dashboard').addEventListener('click', function() {
        C.handleDashboardClick();
    });
    document.querySelector('body').addEventListener('click', function(event) {
        if (event.target.id === 'dashboard-site') {
            C.handleDashboardSiteClick();
        }
    });
    document.querySelector('body').addEventListener('click', function(event) {
        if (event.target.id === 'close_popup') {
            C.clearPopup();
        }
    });
    document.querySelector("body").addEventListener('click', function(event) {
        if (event.target.id === 'map-site') {
            C.handleMapSiteClick();
        }
    });
    document.querySelector("#projet-map").addEventListener('click', function() {
        C.handleMapClick();
    });
    document.querySelector("#CV").addEventListener('click', function() {
        C.handleCVClick();
    });
};

C.handleCVClick = function() {
    console.log('clicked');
    window.open('./assets/Brad_Savary_CV.pdf', '_blank');
};

C.handleIconographieClick = function() {
    window.open('./assets/BradSavary_iconographie.pdf', '_blank');
};

C.handleDashboardSiteClick = function() {
    window.open('./projets/dashboard/dist/index.html', '_blank');
};


C.handleDashboardClick = async function() {
    C.clearPopup();
    let popup = document.querySelector('#popup');
    let response = await fetch('./projets/dashboard.html');
    let html = await response.text();
    popup.innerHTML = html;
};

C.handleMapSiteClick = function() {
    window.open('./projets/SAE303-2/client/dist/index.html', '_blank');
};

C.handleMapClick = async function() {
    C.clearPopup();
    let response = await fetch('./projets/map.html');
    let html = await response.text();
    popup.innerHTML = html;
};

C.clearPopup = function() {
    let popup = document.querySelector('#popup');
    popup.innerHTML = '';
};

V.init = function() {
    V.addEventListeners();
};

C.init();