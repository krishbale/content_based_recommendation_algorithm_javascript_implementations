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
  
    // Create an array of vectors for each document
    let vectors = [];
    for (let i = 0; i < docs.length; i++) {
      // Create an object to store the tf-idf values for each term in the document
      let vector = {};
      // Loop through the array of tf-idf values to find the values for the current document
      for (let j = 0; j < tfidfValues.length; j++) {
        if (tfidfValues[j].doc === i) {
          vector[tfidfValues[j].term] = tfidfValues[j].tfidf;
        }
        
      }
      // Add the vector object to the array of vectors
      vectors.push(vector);
      
    }
  
    // Return the array of vectors
    return vectors;

  }
  function cosineSimilarity(vec1, vec2) {
    // Initialize the dot product and magnitudes of the vectors
    let dotProduct = 0;
    let vec1Magnitude = 0;
    let vec2Magnitude = 0;
  
    // Loop through the keys in the first vector
    for (let key in vec1) {
      // Check if the key exists in the second vector
      if (vec2[key]) {
        // Calculate the dot product
        dotProduct += vec1[key] * vec2[key];
      }
      // Calculate the magnitude of the first vector
      vec1Magnitude += vec1[key] * vec1[key];
    }
  
    // Loop through the keys in the second vector
    for (let key in vec2) {
      // Calculate the magnitude of the second vector
      vec2Magnitude += vec2[key] * vec2[key];
    }
  
    // Calculate the magnitudes of the vectors
    vec1Magnitude = Math.sqrt(vec1Magnitude);
    vec2Magnitude = Math.sqrt(vec2Magnitude);
  
    // Calculate and return the cosine similarity
    return dotProduct / (vec1Magnitude * vec2Magnitude);
  }
//   let vec1 = { term1: 0.5, term2: 0.5 };
//   let vec2 = { term1: 0.5, term2: 0.5 };
//   let similarity = cosineSimilarity(vec1, vec2);
//   console.log(similarity);
    
  

  const documents = [
    { id: '1000001', content: 'Why studying javascript is fun?' },
    { id: '1000002', content: 'The trend for javascript in machine learning' },
    { id: '1000003', content: 'The most insightful stories about JavaScript' },
    { id: '1000004', content: 'Introduction to Machine Learning' },
    { id: '1000005', content: 'Machine learning and its application' },
    { id: '1000006', content: 'Python vs Javascript, which is better?' },
    { id: '1000007', content: 'How Python saved my life?' },
    { id: '1000008', content: 'The future of Bitcoin technology' },
    { id: '1000009', content: 'Is it possible to use javascript for machine learning?' }
  ];
  
  // Extract the content of each document
  let docContents = documents.map(doc => doc.content);
  
  // Calculate the tf-idf vectors for the documents
  let vectors = tfidf(docContents);
  let scorearray = []
  
  // Calculate the cosine similarity between each pair of documents
  for (let i = 0; i < vectors.length; i+=1) {
    for (let j = 0; j < i; j+= 1) {
      let similarity = cosineSimilarity(vectors[i], vectors[j]);
     if(similarity > 0){
      const scoreobj1 = {
        
        id:documents[j].id,
        id2:documents[i].id,
        score:similarity
      }
      scorearray.push(scoreobj1)
     

     }
    

      
      // console.log(`Similarity between documents ${documents[i].id} and ${documents[j].id}: ${similarity}`);
      
}
    }
   


  //
  const array = [
    { id: '1000001', id2: '1000009', score: 0.050251839895371526 },     
    { id: '1000003', id2: '1000008', score: 0.052925612402496304 },     
    { id: '1000002', id2: '1000003', score: 0.05520867217463666 },      
    { id: '1000002', id2: '1000008', score: 0.06136100848019737 },      
    { id: '1000001', id2: '1000002', score: 0.06559910323489951 },      
    { id: '1000006', id2: '1000007', score: 0.0997624176292989 },       
    { id: '1000004', id2: '1000009', score: 0.10598086213750112 },      
    { id: '1000001', id2: '1000006', score: 0.10936115483878686 },      
    { id: '1000002', id2: '1000005', score: 0.11949396352811437 },      
    { id: '1000004', id2: '1000005', score: 0.13779516734613265 },      
    { id: '1000002', id2: '1000009', score: 0.23284306555164636 }       
  ];
  
  const id = '1000001';
  
  const sortedArray = array
    .sort((a, b) => b.score - a.score)
    .filter(item => item.id === id || item.id2 === id);
  
  const topThree = sortedArray.slice(0, 3);
  
  console.log(topThree);
  