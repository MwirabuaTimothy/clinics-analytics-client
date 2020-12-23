
export const shuffle = (array: number[]) => {
  var currentIndex = array.length, temporaryValue, randomIndex;
  let copy = [...array]

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = copy[currentIndex];
    copy[currentIndex] = copy[randomIndex];
    copy[randomIndex] = temporaryValue;
  }

  return copy;
}