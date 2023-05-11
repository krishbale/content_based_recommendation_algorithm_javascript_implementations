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
  let vec1 = { term1: 0.5, term2: 0.5 };
  let vec2 = { term1: 0.5, term2: 0.5 };
  let similarity = cosineSimilarity(vec1, vec2);
  console.log(similarity);
    