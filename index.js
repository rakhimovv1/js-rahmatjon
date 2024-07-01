// Role check for the user
const role = '18'

if (role === '18') {
    document.title = 'XUSH KELIBSIZ😊'
} else{
    document.title = 'BOLLALAR UCHUN😉'
}

// Admin role check
let role1 = prompt("Admin")

if (role1 === 'admin') {
    alert('XUSH KELIBSIZ ADMIN')
    document.body.style.backgroundColor = 'green'
} else {
    alert('ERROR!!')
    document.body.style.backgroundColor = 'crimson'
}
