// Zadajte hodnoty známok
let A = parseFloat(prompt("Zadaj počet známky A:"));
let B = parseFloat(prompt("Zadaj počet známky B:"));
let C = parseFloat(prompt("Zadaj počet známky C:"));
let D = parseFloat(prompt("Zadaj počet známky D:"));
let E = parseFloat(prompt("Zadaj počet známky E:"));

if (A < 0 || B < 0 || C < 0 || D < 0 || E < 0) {
    alert("počet známok nesmie mať zápornú hodnotu")
} else {
    // Vypočítaj priemer

    let sum = A + B + C + D + E

    let pocet = A * 1 + B * 1.5 + C * 2 + D * 2.5 + E * 3


    let priemer = pocet / sum;


    // Zobraz priemer na stránke
    document.write("<h2>Váš priemer je: " + priemer + "</h2>");
    document.write(`<p>počet Ačiek je ${A}</p> `)
    document.write(`<p>počet Bčiek je ${B}</p> `)
    document.write(`<p>počet Cčiek je ${C}</p> `)
    document.write(`<p>počet Dčiek je ${D}</p> `)
    document.write(`<p>počet Ečiek je ${E}</p> `)

    document.write(` <h2>suma známok je ${sum}</h2>`)

    document.write(`<h2>výpočet je nasledovný: ${pocet} / ${sum} </h2>`)
}







