const eventHub = document.querySelector(".container")

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            
            <div class="pastEntry__top">
                <div class="entry__date past__block">${entry.date}</div>
                <div class="entry__concepts past__block">${entry.concept}</div>
                <div class="entry__mood past__block">${entry.mood.label}</div>
            </div>
            <div class="entry__entry">${entry.entry}</div>
            <div class="entry__actions">
                <input type="submit" value="Edit" class="entry__edit">
                <button value="deleteEntry--${entry.id}" id="deleteEntry--${entry.id}">Delete</button>
            </div>
            <hr>
        </section>    
        `
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEntry--")){
        const [prefix, suffix] = event.target.id.split("--")
        
        console.log("suffix: ", suffix)
        const customEvent = new CustomEvent("deleteClicked", {
            detail: {
                entryId: suffix
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
    
})

