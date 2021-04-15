console.log(validBraces("(())[(]"));
function validBraces(braces) {
  let matches = [];
  for (let i = 0; i < braces.length; i++) {
    if (matches.length != 0) {
      if (matchBrace(matches[matches.length - 1], braces[i])) {
        matches.pop();
      } else {
        matches.push(braces[i]);
      }
    } else {
      matches.push(braces[i]);
    }
  }
  if (matches.length == 0) {
    return true;
  }
  return false;
}

function matchBrace(a, b) {
  let result = false;
  switch (a) {
    case "(":
      result = b == ")" ? true : false;
      break;
    case "[":
      result = b == "]" ? true : false;
      break;
    case "{":
      result = b == "}" ? true : false;
      break;
  }
  return result;
}
