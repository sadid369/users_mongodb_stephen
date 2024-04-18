const assert = require('assert')
const User = require('../src/user')


describe('Deleting a user', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({ name: 'Joe' })
        joe.save().then(() => {
            done();
        })
    })

    it('model instance delete', (done) => {
        User.deleteOne({ _id: joe._id }).then(() => {
            User.findOne({ name: 'Joe' }).then((user) => {
                assert(user === null);
                done();
            })
        })
    })
    it('class method  delete', (done) => {
        User.findOneAndDelete({ name: 'Joe' }).then((res) => {

            return User.findOne({ name: 'Joe' })
        }).then((user) => {
            assert(user === null)
            done();
        })

    })
    it('class method  findAndDelete', (

    ) => {

    })
    it('class method  findByIdAndDelete', (done) => {
        User.findByIdAndDelete(joe._id).then((res) => {
            console.log(res);
            return User.findOne({ name: 'Joe' });
        }).then((user) => {
            assert(user === null);
            done()
        })
    })


})
