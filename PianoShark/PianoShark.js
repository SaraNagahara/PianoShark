document.addEventListener("keypress", function(event) {
    handleNoteEvent(event.key);
});

document.addEventListener("keyup", function(event) {
    document.getElementById('shark').src = "/piano/tubalhao1.png";
    let h2 = document.querySelector('h2');
    h2.textContent = "";

    document.querySelectorAll(".tile").forEach(button => {
        button.classList.remove("active");
    });
});

function handleNoteEvent(key) {
    let img;
    let h2 = document.querySelector("h2");
    let noteName = getNoteName(key);

    if (pianoNotes(key)) {
        img = "/piano/tubalhao2.png";
        if (noteName) {
            h2.textContent = noteName;
            document.querySelectorAll(".tile").forEach(button => {
                if (button.textContent.toLowerCase() === key) {
                    button.classList.add("active");
                }
            });
        }
    } else {
        img = "/piano/tubalhao1.png";
    }
    document.getElementById('shark').src = img;
}

function pianoNotes(key) {
    switch (key) {
        case 'a':
            let dó = new Audio('piano/dó.wav');
            dó.play();
            return true;
        case 's':
            let ré = new Audio('piano/ré.wav');
            ré.play();
            return true;
        case 'd':
            let mi = new Audio('piano/mi.wav');
            mi.play();
            return true;
        case 'f':
            let fá = new Audio('piano/fá.wav');
            fá.play();
            return true;
        case 'j':
            let sol = new Audio('piano/sol.wav');
            sol.play();
            return true;
        case 'k':
            let lá = new Audio('piano/la.wav');
            lá.play();
            return true;
        case 'l':
            let si = new Audio('piano/si.wav');
            si.play();
            return true;
        default:
            console.log("Invalid key pressed: " + key);
            return false;
    }
}

function getNoteName(key) {
    switch (key) {
        case 'a':
            return 'Dó';
        case 's':
            return 'Ré';
        case 'd':
            return 'Mi';
        case 'f':
            return 'Fá';
        case 'j':
            return 'Sol';
        case 'k':
            return 'Lá';
        case 'l':
            return 'Si';
        default:
            return '';
    }
}
