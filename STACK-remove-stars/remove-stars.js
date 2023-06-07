/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let starStack = [];
  let starString = "";
  for (let i = 0; i <= s.length; i++){
      starStack.push(s[i]);
      if(s[i] === "*"){
          starStack.pop();
          starStack.pop();
      }
      starString = starStack.join("");
  }

  return starString;
};