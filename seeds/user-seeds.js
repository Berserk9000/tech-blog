const { User } = require('../models');

const userData = [{
        username: 'Ken',
        password: 'kenny'

    },
    {
        username: 'Spenny',
        password: 'spenny9000'
    },
    {
        username: 'Deez',
        password: 'deez'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;