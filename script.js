var wdi_17_names = ['Addison','Ben', 'Christine', 'Chloe', 'Cris', 'Dane', 'David H',
'David Z', 'Emily', 'Imtaek', 'Jack', 'Jesse P', 'Jesse Z', 'Jonathan', 'Pericles', 'Peter',
'Philippe', 'Sergio', 'Simon', 'Tali', 'Tavo', 'Trevor'];

var i = 0;

function eachName(){
    console.log(wdi_17_names[i]);
    i++;
}
eachName();


// REFACTORED
// var namePicker = wdi_17_names[Math.floor(Math.random() * wdi_17_names.length)];
// console.log(namePicker);
