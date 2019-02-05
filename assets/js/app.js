new Vue({
    el: '#feedback',
    data: {
        title: 'What Our Tourist Say',
        bgImage: `url("../img/Rectangle_4142.jpg") center center no-repeat $bg-dark`,
        image: 'assets/img/boy.jpg',
        titleComponent: 'Sam Sumon',
        text: 'But I must explain to you how all this mistaken idea of account to\n' +
        '            denouncinpleasure and praising pain But I must explain to you how all this mistaken idea of account to nai\n' +
        '            denouncing pleasure and praising pain was account born and I account will give you a complete account of the\n' +
        '            system was account born and I account will give you a nai the complete account of the system'
    },
    components: {
        block: {
            props: ['titleComponent', 'text'],
            template:
                `
            <div class="container__box">
                 <h2 class="container__title container__title--thinner">{{titleComponent}}</h2>
                 <p class="container__text container__text--indent">{{text}}</p>
            </div>
            `
        }
    }


});