import { dispatchStateChangeEvent } from './JournalDataProvider.js'

let tags = []

// Get tags from database
export const getTags = () => {
    return fetch("httP://localhost:8088/tags")
        .then(response => response.json())
        .then(parsedResponse => {
            tags = parsedResponse
        })
}

// copy of the tags array
export const useTags = () => tags.slice()


// Check if tag exists in database
export const findTag = subject => {
    return fetch(`http://localhost:8088/tags?subject=${subject}`)
        .then(response => response.json())
        
}



// Save a new tag to the tag database
export const saveTag = (tag) => {
    fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
    .then(getTags)
    .then(dispatchStateChangeEvent)
}



// save a new entry to the join table of relationships between tags and entries
export const saveEntryTag = (entry, tag) => {
    fetch("http://localhost:8088/entryTags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
    .then(getTags)
    .then(dispatchStateChangeEvent)
}