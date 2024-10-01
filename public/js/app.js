let notes = [];

function loadNotes() {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
        notes = storedNotes;
        displayNotes();
    }
}

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = ''; // Clear the list before displaying

    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(noteDiv);
    });
    
    localStorage.setItem('notes', JSON.stringify(notes));
}

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:8001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('message').innerText = result.message;

    if (response.ok) {
        document.getElementById('logoutButton').style.display = 'block';
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('registerFormContainer').style.display = 'none';
        document.getElementById('notesContainer').style.display = 'block'; // Show notes area
        loadNotes(); 
    }
});

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:8001/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('message').innerText = result.message;
});

// Logout functionality
document.getElementById('logoutButton').addEventListener('click', () => {
    document.getElementById('message').innerText = 'You have logged out.';
    document.getElementById('logoutButton').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
    document.getElementById('registerFormContainer').style.display = 'block';
    document.getElementById('notesContainer').style.display = 'none'; // Hide notes area
    notes = []; // Clear notes
    localStorage.removeItem('notes'); // Remove notes from local storage
    displayNotes(); // Refresh notes display
});

document.getElementById('noteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const note = {
        title: formData.get('title'),
        content: formData.get('content')
    };

    notes.push(note);
    displayNotes(); 
    e.target.reset(); 
});


function deleteNote(index) {
    notes.splice(index, 1); 
    displayNotes(); 
}

loadNotes();
