function censorWord(sentence, wordTocensor){
    const regex = new RegExp(wordTocensor, 'gi');
    const censorText = sentence.replace(regex, '****');
    return censorText;
}

const originalPost = "JavaScript is fun, but something javascript can be tricky."
const cleanPost = censorWord(originalPost, "javascript");

console.log(cleanPost);