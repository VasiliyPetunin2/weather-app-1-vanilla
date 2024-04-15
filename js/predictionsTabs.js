const predictionsDetails = {
    weekly: [
        {
            date: 'Завтра',
            img: 'defaultSliderCardPicture.png',
            imgDescription: 'Default picture of precipitation',
            temperature: {
                atDay: '10°C',
                atNight: '4°C'
            }
        },
        {
            date: 'Пн, 15 мар',
            img: 'cloudyRainySliderCardPicture.png',
            imgDescription: 'Cloudy and rainy',
            temperature: {
                atDay: '10°C',
                atNight: '4°C'
            }
        },
        {
            date: 'Вт, 16 мар',
            img: 'cloudyRainySliderCardPicture.png',
            imgDescription: 'Cloudy and rainy',
            temperature: {
                atDay: '10°C',
                atNight: '4°C'
            }
        },
        {
            date: 'Ср, 17 мар',
            img: 'stormySliderCardPicture.png',
            imgDescription: 'Stormy',
            temperature: {
                atDay: '10°C',
                atNight: '4°C'
            }
        },
        {
            date: 'Чт, 18 мар',
            img: 'stormySliderCardPicture.png',
            imgDescription: 'Stormy',
            temperature: {
                atDay: '10°C',
                atNight: '4°C'
            }
        },
        {
            date: 'Пт, 19 мар',
            img: 'stormySliderCardPicture.png',
            imgDescription: 'Stormy',
            temperature: {
                atDay: '10°C',
                atNight: '4°C'
            }
        }
    ],
    hourly: [
        {
            time: '15:00',
            img: 'defaultSliderCardPicture.png',
            imgDescription: 'Default picture of precipitation',
            temperature: '10°C'
        },
        {
            time: '16:00',
            img: 'defaultSliderCardPicture.png',
            imgDescription: 'Default picture of precipitation',
            temperature: '10°C'
        },
        {
            time: '17:00',
            img: 'defaultSliderCardPicture.png',
            imgDescription: 'Default picture of precipitation',
            temperature: '10°C'
        },
        {
            time: '18:00',
            img: 'defaultSliderCardPicture.png',
            imgDescription: 'Default picture of precipitation',
            temperature: '10°C'
        },
        {
            time: '19:00',
            img: 'stormySliderCardPicture.png',
            imgDescription: 'Stormy',
            temperature: '10°C'
        },
        {
            time: '20:00',
            img: 'stormySliderCardPicture.png',
            imgDescription: 'Stormy',
            temperature: '10°C'
        }
    ]
};

const predictionWeeklyTab = document.querySelector('button[data-time-duration="predictionWeekly"]');
const predictionHourlyTab = document.querySelector('button[data-time-duration="predictionHourly"]');
const btnForInsert = document.querySelector('.sliderBtnNext');
let unclickedTab = Node;
let clickedTab = Node;
let sliderCards = NodeList;
let activePredictionType = '';

const removeSlidersCards = () => {
    sliderCards = document.querySelectorAll('#sliderCardsItem');
    sliderCards.forEach(sliderCard => sliderCard.remove());
};

const generateHTML = () => {
    let html = '';
    predictionsDetails[activePredictionType].map( (predictionObj) => {
        html += `
        <li id="sliderCardsItem">
            <article class="sliderCard">
                <p class="sliderCardText">${predictionObj.date ? predictionObj.date : predictionObj.time}</p>
                <img src="images/slider/${predictionObj.img}" alt="${predictionObj.imgDescription}" class="sliderCardImg"/>
        `;

        if (typeof(predictionObj.temperature) === 'object') {
            html += `
                <div class="sliderCardTemperature">
                    <span class="sliderCardText">${predictionObj.temperature.atDay}</span>
                    <span class="sliderCardText sliderCardTextTransparent">${predictionObj.temperature.atNight}</span>
                </div>
            `;
        }
        if (typeof(predictionObj.temperature) === 'string') {
            html += `
                <p class="sliderCardText">${predictionObj.temperature}</p>
            `;
        }

        html += '</article></li>';
    });
    return html;
};

const renderSlidersCards = (slidersCardsHTML) => {
    btnForInsert.insertAdjacentHTML('beforebegin', slidersCardsHTML);
};

const handleTabSwitching = () => {
    if (unclickedTab.classList.contains('predictionTabActive')) {

        unclickedTab.classList.remove('predictionTabActive');
        removeSlidersCards();
        sliderCards = NodeList;

    }

    if (!clickedTab.classList.contains('predictionTabActive')) {

        clickedTab.classList.add('predictionTabActive');
        renderSlidersCards(generateHTML());

    }
};

predictionWeeklyTab.addEventListener('click', function (e) {
    e.stopPropagation;
    unclickedTab = predictionHourlyTab;
    clickedTab = predictionWeeklyTab;
    activePredictionType = 'weekly';
    handleTabSwitching();
});

predictionHourlyTab.addEventListener('click', function (e) {
    e.stopPropagation;
    unclickedTab = predictionWeeklyTab;
    clickedTab = predictionHourlyTab;
    activePredictionType = 'hourly';
    handleTabSwitching();
});


activePredictionType = 'weekly';
renderSlidersCards(generateHTML());
