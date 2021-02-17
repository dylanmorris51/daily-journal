export const MoodFilter = moods => {
    
    return `<fieldset>
        <legend>Filter by Mood</legend>
        ${moods.map(mood => {  
            return `
            <input type="radio" name="moodButton" value="${mood.label}" id="radio--${mood.id}">
            <label for="radio--${mood.id}">${mood.label}</label>
        `}).join("")}    
    </fieldset>`
}