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
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

// Saves new journal entry and posts to json database
export const saveJournalEntry = newJournalEntry => {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

// Deletes past entry from database
export const DeletePastEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}

