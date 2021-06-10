module.exports = {
    testReturnArray: function() {
        const nothing = 0;
        const arr = [
            { index: 1, name: 'Rachel', programme: 'Arrested Development', since: 'just now', img: 'https://semantic-ui.com/images/avatar2/small/rachel.png'},
            { index: 2, name: 'Lindsay', programme: `Bob's burgers`, since: '10 hours ago', img: 'https://semantic-ui.com/images/avatar2/small/lindsay.png' },
            { index: 3, name: 'Matthew', programme: 'the Godfather part 2', since: 'yesterday', img: 'https://semantic-ui.com/images/avatar2/small/matthew.png' },
            { index: 4, name: 'Jenny Hass', programme: 'Twin Peaks', since: '3 days ago', img: 'https://semantic-ui.com/images/avatar/small/jenny.jpg' },
            { index: 5, name: 'Veronika Ossi', programme: nothing, since: nothing, img: 'https://semantic-ui.com/images/avatar/small/veronika.jpg' },
        ];
        return arr;
    }
};