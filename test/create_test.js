const assert = require('assert');
const { describe, it } = require("mocha");
const User = require('../src/user');

describe('Creating records', () => {
    // 
    it('saves a user', (done) => {
        const joe = new User({ name: 'Joe' })
        joe.save().then((result) => {
            assert(!joe.isNew)
            done()
        }).catch((err) => {
            console.log(err);
        });


    })
})