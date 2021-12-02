const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

//create add command
yargs.command({
    command: 'add',
    describe: 'here is my note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})


//create remove command
yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNotes(argv.title)
    }
})
 //create a list command
 yargs.command({
     command: 'list',
     describe: 'this is the list',
     handler(){
         notes.listNotes()
     }
 })

 //create the read command
 yargs.command({
     command: 'read',
     describe: 'the read',
     builder: {
         title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
     },  
     handler(argv) {
         notes.readNotes(argv.title)
     }
 })

 yargs.parse()
