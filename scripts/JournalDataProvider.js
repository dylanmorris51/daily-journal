let journal = []
const eventHub = document.querySelector(".container")
export const useJournalEntries = () => {
    
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => 
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
        .then(response => response.json())
        .then(parsedResponse => {
            journal = parsedResponse
            
        })

}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

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