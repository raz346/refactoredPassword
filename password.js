var words = process.argv.slice(2);
function obfuscate(password){
  password = password.replace(/o/g, "0").replace(/a/g, "4").replace(/e/g, "3").replace(/l/g, "1");
    return password;
}
console.log(obfuscate(words[0]));

