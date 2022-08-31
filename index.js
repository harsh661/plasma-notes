showNotes();
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener('click', (e) => {
    
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notesObj)

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = '';
    notesObj.forEach((element, index) => {
        html += 
           `<div class="card my-2 mx-2" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title">${index + 1}</h5>
                    <p class="text card-text">
                    ${element}
                    </p>
                    <button onclick="deleteNote(this.id)" class="btn btn-danger" id="${index}">Delete Note</button>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0){
    notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML =  `Nothing to show, Add Notes!`;
    }
}

function deleteNote(index){
    console.log('deleted')
    let notes = localStorage.getItem('notes');
    if (notes == null){
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchNotes');
search.addEventListener('input', ()=>{

    let inputVal = search.value;
    console.log(inputVal)
    let noteCard = document.getElementsByClassName('card');
    Array.from(noteCard).forEach(function(elements){
        let cardText = elements.getElementsByClassName("text")[0].innerText;
        console.log(cardText)
        // if(cardText.includes(inputVal)){
        //     element.style.display = 'block';
        // } else {
        //     element.style.display = 'none';
        // }
    })
})
