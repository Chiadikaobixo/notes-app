const chalk = require('chalk')
const { Console } = require('console')
const fs = require ('fs')
const { title } = require('process')


const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find ((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
        const matchedNotes = notes.filter ((notes) => notes.title !== title)

    if (notes.length > matchedNotes.length){
         console.log(chalk.green.inverse('Note removed'))
         saveNotes(matchedNotes)
    }else {
        console.log(chalk.red.inverse('No note found'))
    } 

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('your notes'))

    notes.forEach((notes) =>{
        console.log(notes.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
       
      
    if(note){
        console.log(chalk.green.inverse (note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('no notes found'))
    }
      
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)  
    } catch (e) {
        return [] 
    }
   
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}

