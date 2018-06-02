function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User saved');
}

function getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}

// function _getEmptyUser() {
//     return { name: 'Puki', balance: 100, moves: [] }
// }

// function _getEmptyTransaction() {
//     return { at: 173989218, amount: 2, to: 'Shraga' }
// }

export default {
    saveUser,
    getUser
}