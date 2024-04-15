const searchCityPanelHTML = `
    <section class="searchCityPanel">
        <button class="btn-closeSearchCityPanel">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="#48484A" class="btn-closeSearchCityPanelIMG">
            <path 
                d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
            />
        </svg>
        </button>
        <form action="#" class="form-searchCityPanel">
            <input type="text" value="Москва" id="nameOfTheSearchingCity" class="btn textFieldSearchCityPanel">
            <input type="submit" value="Найти" class="btn">
        </form>
    </section>`;

const sideBarElem = document.querySelector('.side-bar');
const btnSearchCityElem = document.querySelector('.btn-searchCity');
let searchCityPanelElem = Element;

btnSearchCityElem.addEventListener('click', function (e) {
    sideBarElem.insertAdjacentHTML('afterend', searchCityPanelHTML);
    searchCityPanelElem = document.querySelector('.searchCityPanel');

    handleOpeningAndClosingOfSearchCityPanel();

    document.querySelector('.btn-closeSearchCityPanel').addEventListener('click', function (e) {
        handleOpeningAndClosingOfSearchCityPanel();
        e.stopPropagation;
    });

    e.stopPropagation;
});

const handleOpeningAndClosingOfSearchCityPanel = () => {
    setTimeout(() => {
        searchCityPanelElem.classList.toggle('openSearchCityPanel');

        if (!searchCityPanelElem.classList.contains('openSearchCityPanel')) {
        
            setTimeout(() => {
                searchCityPanelElem.remove();
            }, 500);
        }
    }, 0);
};



{/* <img src="images/searchCityPanel/btnClose.svg" alt="btnClose"/> */}