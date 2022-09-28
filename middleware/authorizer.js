const authenticate = (req, res, next) => {
    console.log('Authenticated!!');
    next();
}

// const authorize = (req, res, next) => {
//     console.log('Authorized!!');
//     next();
// }

module.exports = {
    authenticate
    // authorize
}