import { getEntries, saveJournalEntry, useJournalEntries } from "./JournalDataProvider.js"
import { getMoods, useMoods } from './MoodProvider.js'
import { findTag, saveEntryTag, saveTag } from "./TagProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".newJournal")


// journal form construction
const render = (moods) => {


    contentTarget.innerHTML = `
    <h2>Daily Journal</h2>
    <section class="journalFormInput">
    <form action="">
    <!-- <fieldset> -->
    <!-- <fieldset> -->
        <label for="journalDate">Date of Entry:</label>
        <input type="date" name="journalDate" id="journalDate">
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalConcepts">Concepts:</label>
        <input type="text" name="journalConcepts" id="journalConcepts">
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalEntry">Journal Entry:</label>
        <textarea rows="4" name="journalEntry" id="journalEntry"></textarea>
    <!-- </fieldset> -->
    <!-- <fieldset> -->
        <label for="journalMood">Mood:</label>
        <select type="journalMood" name="journalMood" id="journalMood">
            ${moods.map(mood => {
                return `<option id="mood--${mood.id}" value="${mood.id}">${mood.label}</option>`
            })}
        </select>
        <label for="tags">Tags:</label>
        <input type="text" placeholder="(separate by commas)" name="tags" id="tags">

    <!-- </fieldset> -->
    <!-- </fieldset> -->
    
    <div id="submitButton">
        <input type="submit" value="Record Journal Entry" name="journalButton" id="journalButton">
    </div>
    
    
</form>
    </section>
    `
}

// render journal form to page
export const JournalForm = () => {
    getMoods()
        .then(useMoods)
        .then(() => {
            const moodsArray = useMoods()
            

            render(moodsArray)
        })
}

// Mood select listener // ! May not be needed
// let suffix
// eventHub.addEventListener("change", changeEvent => {
    
//     if(changeEvent.target.id === "journalMood"){
//         suffix = changeEvent.target.value

//         const customEvent = new CustomEvent("moodSelected", {
//             detail: {
//                 selectedMood: suffix
//             }
//         })
//         console.log('customEvent: ', suffix);
//         eventHub.dispatchEvent(customEvent)
//     }
// })

// Post entry data to json
eventHub.addEventListener("click", event => {
    
    if (event.target.id === "journalButton") {
        event.preventDefault()
        const date = document.querySelector("#journalDate").value
        const concept = document.querySelector("#journalConcepts").value
        const entry = document.querySelector("#journalEntry").value
        const mood = parseInt(document.querySelector("#journalMood").value)
        
        const tagsArray = (document.querySelector("#tags").value).split(",")
        
        const newEntry = {
            "date": date,
            "concept": concept,
            "entry": entry,
            "moodId": mood,
        }
        saveJournalEntry(newEntry, tagsArray)
        
    }
    
    
})



// Post tags to json
eventHub.addEventListener("journalStateChanged", event => {
    // separate words into an array
    // let newTag
    // let entriesArray
    // let previousEntry
    
    

        
})
    