const natural = require('natural');
const { TfIdf, PorterStemmer, NGrams } = natural;
const tokenizer = new natural.WordTokenizer();
// A word-based tokenization algorithm will break the sentence into words. The most common one is splitting based on space.
const sw = require('stopword');
const tmpString = "MY name is Balkrishna ? 500 #6868 and Ilive in khana? ? appple apple apple apple apple  furit furit fairly sportingly ./ { }"
const tokens = tokenizer.tokenize(tmpString)


const removeStopwords = sw.removeStopwords(tokens);

// Stop words are a set of commonly used words in any language. For example, in English, “the”, “is” and “and”, would easily qualify as stop words. In NLP and text mining applications, stop words are used to eliminate unimportant words, allowing applications to focus on the important words instead.

const unigram = removeStopwords.map(unigram => 
    
      PorterStemmer.stem(unigram)
       
    
      );
    console.log(unigram);
    const bigrams = NGrams.bigrams(tokens)
      .filter(bigram =>
        // filter terms with stopword
        (bigram.length === sw.removeStopwords(bigram).length))
      .map(bigram =>
        // stem the tokens
        bigram.map(token => PorterStemmer.stem(token))
          .join('_'));
          console.log(bigrams);

    // get trigrams
    const trigrams = NGrams.trigrams(tokens)
      .filter(trigram =>
        // filter terms with stopword
        (trigram.length === sw.removeStopwords(trigram).length))
      .map(trigram =>
        // stem the tokens
        trigram.map(token => PorterStemmer.stem(token))
          .join('_'));
          console.log(trigrams);

          let x = [].concat(unigram,bigrams,trigrams)
          console.log(x);
          

          module.exports = x;

