// const fs = require('fs')

// fs.writeFileSync('note.txt', 'Hello World.')

// fs.appendFileSync('note.txt', ' My name is vnlemanhthanh', '')

// const name = require('./utils')

// console.log(name)

const validator = require('validator')
const getNotes = require('./note.js')

const msg = getNotes()

console.log(msg)
console.log(validator.isEmail('vnlemanhthanh@gmail.com'))
console.log(validator.isURL('https://vnlemanhthanh.github/'))
