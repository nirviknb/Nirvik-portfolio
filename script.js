// submission
function addRecommendation(event) {
    event.preventDefault();

    // get values
    const nameInput = document.getElementById("rec-name");
    const messageInput = document.getElementById("rec-message");
    
    const name = nameInput.value;
    const message = messageInput.value;

    // making sure input are not empty
    if (name.trim() !== "" && message.trim() !== "") {
        
        // new recomendation element
        const recList = document.getElementById("rec-list");
        
        // new card
        const newCard = document.createElement("div");
        newCard.className = "b rec-card"; 
        newCard.style.borderTopColor = "lightpink"; 
        newCard.innerHTML = `
            <p><i>"${message}"</i></p>
            <h4>- ${name}</h4>
        `;
// Hey there! hope you are having a great time. I did use some help from AI but only for fixing some issues where i had confusion like the new card and navigation. Hope you dont mind.

        // Appending the new elements to the list
        recList.appendChild(newCard);

        // confirmation popup
        alert("Thank you! Your recommendation has been successfully submitted.");

        // clear form
        nameInput.value = "";
        messageInput.value = "";
    }
}