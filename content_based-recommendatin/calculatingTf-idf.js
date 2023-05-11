function tfidf(docs) {
    // Create an object to store the term frequency for each term in each document
    let termFreq = {};
    // Create an array to store the tf-idf values for each term in each document
    let tfidfValues = [];
  
    // Loop through each document
    for (let i = 0; i < docs.length; i++) {
      // Split the document into an array of terms
      let terms = docs[i].split(' ');
  
      // Calculate the term frequency for each term in the document
      for (let j = 0; j < terms.length; j++) {
        let term = terms[j];
        if (termFreq[term]) {
          termFreq[term][i] = termFreq[term][i] ? termFreq[term][i] + 1 : 1;
        } else {
          termFreq[term] = {};
          termFreq[term][i] = 1;
        }
      }
    }
  
    // Loop through each term in the term frequency object
    for (let term in termFreq) {
      // Calculate the idf value for the term
      let idf = Math.log(docs.length / Object.keys(termFreq[term]).length);
  
      // Loop through each document to calculate the tf-idf value for the term
      for (let i = 0; i < docs.length; i++) {
        // Calculate the term frequency for the term in the document
        let tf = termFreq[term][i] ? termFreq[term][i] : 0;
        // Calculate the tf-idf value for the term in the document
        let tfidf = tf * idf;
        // Add the tf-idf value to the array
        tfidfValues.push({ term: term, doc: i, tfidf: tfidf });
      }
    }
  
    // Return the array of tf-idf values
    return tfidfValues;
  }

  let docs = ['this is document one', 'this is document two'];
let tfidfValues = tfidf(docs);
console.log(tfidfValues);
