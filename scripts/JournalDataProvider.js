const journal = []

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => 
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(() => {
            response => response.json()
        })
        .then(() => {
            journal = parsedResponse
        })
}