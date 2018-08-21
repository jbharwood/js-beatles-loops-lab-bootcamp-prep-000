function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return beatles
}

function johnLennonFacts(facts) {
  var i = 0
  var temp = []
  while (i < facts.length ) {
    temp.push(`${facts[i]}`  + '!!!')
    i++
  }
    return temp
}

function iLoveTheBeatles(n) {
  var newArray = []
  var i = 0
  do {
    newArray.push("I love the Beatles!")
    i++
  } while (i < 15)
  return newArray
}