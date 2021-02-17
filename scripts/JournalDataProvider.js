import { findTag, saveTag, saveEntryTag } from './TagProvider.js'


let journal = []
const eventHub = document.querySelector(".container")

// Copy of journal array that sorts dates
export const useJournalEntries = () => {

    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

// Fetch call
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(parsedResponse => {
            journal = parsedResponse

        })

}

// Reacts for state change event
export const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

// Saves new journal entry and posts to json database
export const saveJournalEntry = (newJournalEntry, arrayOfTags) => {

    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        .then(response => response.json())
        .then(newEntry => {
            console.log("entry flag", newEntry)
            // Logic from other component


            arrayOfTags.forEach(tag => {
                // debugger

                findTag(tag)
                    .then(matches => { // 'matches' looks for and returns an object from the json file if it's "subject" property matches the tag entered by user
                        console.log("matches flag", matches)
                        let matchingTag = null

                        // checks to see if something was returned. If so, get the id value of the returned object and store it in matchingTag
                        if (matches.length > 0) {
                            matchingTag = matches[0].id
                        }

                        // If the tag doesn't already exist, create it and assign it to the join table with a corresponding entryId
                        if (matchingTag === null) {
                            //Create an object for the tag
                            const tagObj = {
                                "subject": tag
                            }
                            saveTag(tagObj)
                                .then(new_tag => {
                                    saveEntryTag(newEntry.id, new_tag.id)
                                })
                        }
                        else {
                            // Tag does exist, assign it to an entry in the join table
                            saveEntryTag(newEntry.id, matchingTag)
                        }
                    })
            })
        })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}
// ! test and debug ^^

// Deletes past entry from database
export const DeletePastEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

