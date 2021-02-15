export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <hr>
            <div class="pastEntry__top">
                <div class="entry__date past__block">${entry.date}</div>
                <div class="entry__concepts past__block">${entry.concept}</div>
                <div class="entry__mood past__block">${entry.mood.label}</div>
            </div>
            <div class="entry__entry">${entry.entry}</div>
            <div class="entry__actions">
                <input type="submit" value="Edit" class="entry__edit">
                <input type="submit" value="Delete" class="entry__delete">
            </div>
            <hr>
        </section>    
        `
}