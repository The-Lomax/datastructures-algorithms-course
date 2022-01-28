const func = () => {
    let n = parseInt(prompt("ile liczb chcesz podac?"));
    let tablica = [];
    let wynik = 0;
    for (let i = 0; i < n; i++) {
        tablica[i] = parseInt(prompt("podaj liczbe"));
        if (i % 2 == 0) {
            wynik = wynik + tablica[i];
        }
        if (tablica[i] % 2 == 0) {
            console.log(tablica[i]);
        }
    }
    console.log(wynik);
}

let test = [1, 2, 3, 4, 5];
let test2 = test.slice(3, test.length - 1);
console.log(test2.length);