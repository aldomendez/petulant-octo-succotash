
// La intension es inicializar maquinas

"use strict";
var exec  = require('exec-chainable');
var inquirer = require("inquirer");

var bonders = ['46','48','67','68','38','55','57','59','63','14','3','56','58','60','47','49','53','54','13','50','6','61','76','47','49','53']

var choices = bonders.map(function(machine){
  return 'cybond'+machine;
});

choices.push({name:'Add new bonder',value:'newBonder'});
inquirer.prompt([
  {
    type      : "list",
    name      : "bonder",
    message   : "Selecciona la maquina que vas a inicializar",
    paginated : true,
    choices   : choices
  }
], function( answers ) {
  console.log( JSON.stringify(answers, null, "  ") );
});



// "# ignore everithing ...
// /*

// # except
// !/CAT
// /CAT/*
// !/CAT/Runtime"

// exec('net use t: /del /y')
// .then(function (stdout) {
//   console.log(stdout);
//   //=> 1 
//   return exec('net use T: \\\\cybond63\\c$ bonder_02 /USER:AVAGOTECH\\operator');
// }).done(function (stdout) {
//   return console.log(stdout);
  
// });


// var choices = Array.apply(0, new Array(26)).map(function(x,y) {
//   return String.fromCharCode(y + 65);
// });
// choices.push("Multiline option \n  super cool feature");
// choices.push({
//   name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
//   value: "foo",
//   short: "The long option"
// });