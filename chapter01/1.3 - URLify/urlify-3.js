function urlify(str, len) {
  const ar = []
  for (let i=0; i < len;i ++) {
    if (str[i] === " ") {
      ar.push("%20")
    } else {
      ar.push(str[i])
    }
  }
  return ar.join("")
}

console.log(urlify("Mr John Smith   ", 13));
