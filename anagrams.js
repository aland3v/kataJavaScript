function anagrams(word, words) {
    return words.filter(wordc => isAnagram(word, wordc));
}

const isAnagram = (worda, wordb) => {
    if (worda.length !== wordb.length) return false;
    for (let i = 0; i < worda.length; i++) {
        if (wordb.includes(worda.charAt(i))) {
            wordb = wordb.replace(worda.charAt(i), '');
        } else {
            return false;
        }
    }
    return true;
}

const anagrams2 = (word, words) => {
    return words.filter(wordc => {
        let arr = word.split("").sort();
        let arrw = wordc.split("").sort();
        return arr.join("") === arrw.join("") ? true : false;
    })
}

console.log(anagrams2('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']