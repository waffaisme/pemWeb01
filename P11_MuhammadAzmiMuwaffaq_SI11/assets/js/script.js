// menangkap semua element a
document.querySelectorAll("#opts a").forEach((a) =>
//jika di klik akan menjalankan fungsi computer choice
    a.addEventListener("click" , (element) => {
    computerChoice(element);
    })
);
function computerChoice(element) {
    //tangkap pilihan user 
    let pilihanUser = element.target.innerText;

    //menangkap element result dengan queryselector untuk menampung
    //nilai dari game 
    let pilihanComputer = document.querySelector("#result");

    //membuay array komputer 
    let choices = ["Rock", "Paper", "Scissors"];

    //pilihan random untuk komputer 
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    //jika pilihan komputer sama dengan pilhan user 
    if (pilihanUser == pilihanComputer) {
        alert("YOU WIN");
    }
    
    //jika pilha user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }

    // jika pilihan komputer yang menang 
      //jika pilha user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Paper") {
        alert("YOU LOSE");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("YOU LOSE");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("YOU LOSE");
    }
}