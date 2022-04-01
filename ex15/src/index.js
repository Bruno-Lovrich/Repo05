function main() {

  var myNoun = "dog";
  var myVerb = "ran";
  var myAdjective = "big";
  var myAdverb = "quickly";

  var wordBlanks = "My " + myNoun + " " + myVerb + " in front of " + myAdjective + " truck " + myAdverb + ".";

  return wordBlanks;

}

console.log(main());

module.exports = main;