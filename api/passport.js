const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/users");

const verifyCallback = (username, password, done) => {

    User.findOne({where : {email: username }})
        .then((rawUser) => {

            const user = rawUser.dataValues
            if (!user) { return done(null, false) }

            bcrypt.compare(password, user.password, (bcryptErr, verified) => {
                if (verified) {
                    console.log('login sir!')
                    return done(null, user);
                } else {
                    console.log('wrong pass')
                    return done(null, false);
                }
            })       
        })
        .catch((err) => {   
            done(err);
        });

}

const strategy  = new LocalStrategy({usernameField:'email'}, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    console.log('u are serializing an user')
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    console.log('u are DEserializing an user')

    User.findByPk(userId)
        .then((user) => {
            console.log('done!')
            done(null, user);
        })
        .catch(err => done(err))
});