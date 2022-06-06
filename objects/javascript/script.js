const flower1 = {
    name: "Jasmine",
    category: 'Jasmine is a genus of shrubs and vines in the olive family.' + 'It contains around 200 species native to tropical and warm temperate regions\n' + 'of Eurasia, Africa, and Oceania. Jasmines are widely cultivated for the characteristic fragrance of their flowers.',
    image: "images/jasmine.jpeg",
    family: "Oleaceae",
    symbolism: "love, romance, sensuality ",
    source: "https://www.britannica.com/plant/jasmine-plant"
};

const flower2 = {
    name: "Rosa",
    category: 'A rose is a woody perennial flowering plant of the genus Rosa,' + 'in the family Rosaceae, or the flower it bears.\n' + 'There are over three hundred species and tens of thousands of cultivars.\n' + 'They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.',
    image: "images/rose.jpeg",
    family: "Rosaceae",
    symbolism: "love, romance, beauty, courage ",
    source: "https://www.floraly.com.au/blogs/news/rose-symbolism-colours-and-meanings"
};

const flower3 = {
    name: "Peony",
    category: 'The peony or paeony is a flowering plant in the genus Paeonia,\n' + 'the only genus in the family Paeoniaceae.' + 'Peonies are native to Asia, Europe and Western North America.\n' + 'Scientists differ on the number of species that can be distinguished, ranging from 25 to 40, although the current consensus is 33 known species.',
    image: "images/peony.jpeg",
    family: "Paeoniaceae; Raf.",
    symbolism: "love, honor, beauty, happiness wealth, romance ",
    source: "https://urbanstems.com/blog/guide/peony-color-meaning"
};

const flower4 = {
    name: "Hydrangea",
    category: 'Hydrangea common names hydrangea or hortensia,' + 'is a genus of over 75 species of flowering plants native to Asia and the Americas.\n' + 'By far the greatest species diversity is in eastern Asia, notably China, Korea, and Japan.',
    image: "images/hydrangea.jpeg",
    family: "Hydrangeaceae",
    symbolism: "gratitude, grace, beauty ",
    source: "https://www.ftd.com/blog/share/hydrangea-meaning-and-symbolism"
};
const flower5 = {
    name: "Sunflower",
    category: 'Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers.\n' + 'Except for three South American species, the species of Helianthus are native to North America and Central America',
    image: "images/sunflower.jpeg",
    family: "Aesteroideae",
    symbolism: "happiness, optimism, honesty, longevity, peace, admiration, devotion",
    source: "https://www.britannica.com/plant/sunflower-plant"
};



function display() {
    let html = `<h2>${flower1.name}</h2>` +
        `<h3>${flower1.category}</h3>` + `<img src = ${flower1.image}>` +
        `<h3>Family</h3>` +
        `<p>${flower1.family}</p>` +
        `<h3>Symbolism</h3>` +
        `<p>${flower1.symbolism}</p>` + `<h3>Source</h3>` +
        `<p>${flower1.source}</p>`;
    let html2 = `<h2>${flower2.name}</h2>` +
        `<h3>${flower2.category}</h3>` + `<img src = ${flower2.image}>` +
        `<h3>Family</h3>` +
        `<p>${flower2.family}</p>` +
        `<h3>Symbolism</h3>` +
        `<p>${flower2.symbolism}</p>` + `<h3>Source</h3>` +
        `<p>${flower2.source}</p>`;
    let html3 = `<h2>${flower3.name}</h2>` +
        `<h3>${flower3.category}</h3>` + `<img src = ${flower3.image}>` +
        `<h3>Family</h3>` +
        `<p>${flower3.family}</p>` +
        `<h3>Symbolism</h3>` +
        `<p>${flower3.symbolism}</p>` + `<h3>Source</h3>` +
        `<p>${flower3.source}</p>`;
    let html4 = `<h2>${flower4.name}</h2>` +
        `<h3>${flower4.category}</h3>` + `<img src = ${flower4.image}>` +
        `<h3>Family</h3>` +
        `<p>${flower4.family}</p>` +
        `<h3>Symbolism</h3>` +
        `<p>${flower4.symbolism}</p>` + `<h3>Source</h3>` +
        `<p>${flower4.source}</p>`;
    let html5 = `<h2>${flower5.name}</h2>` +
        `<h3>${flower5.category}</h3>` + `<img src = ${flower5.image}>` +
        `<h3>Family</h3>` +
        `<p>${flower5.family}</p>` +
        `<h3>Symbolism</h3>` +
        `<p>${flower5.symbolism}</p>` + `<h3>Source</h3>` +
        `<p>${flower5.source}</p>`;

    document.getElementById('ob1').innerHTML = html;
    document.getElementById('ob2').innerHTML = html2;
    document.getElementById('ob3').innerHTML = html3;
    document.getElementById('ob4').innerHTML = html4;
    document.getElementById('ob5').innerHTML = html5;
}