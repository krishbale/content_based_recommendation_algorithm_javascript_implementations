//step 1
//Training 
//1.a Formatting we format our data in this way
//our data to processs  in this type of formats:
const formattedData = [
  {
    id: '1.jpg',
    content: 'flower flowering plant plant petal geraniaceae melastome family geranium wildflower geraniales perennial plant' 
  }
]
///1.b TF-IDF and Vectors


//TF= numbers of times a terms  features in a document
//for above content tf = 3 for plant 
//idf is expressed as 
//IDf(t) = log(10){Total number of documents}/{Number of documents containing term t}
//that means total no plant term in content by total content 
//calculation in javascript
 //var idf = Math.log((this.documents.length)/docswithterm);
 //so tf*idf is tf*idf;
 //next step 
 //calculate tfidf and 
 // create a vector containing the term as the key  and tf-idf as the value
 //we will be using natural and vector objects as npm packages 
 //the tfidf.addDocument will tokenise our content property  
 // the tfidf.listTerms method lists our new processed documents returning 
 // an array of objects containing the TD ,IDF  and TD-IDF. 
 //but we are only concerned with tdidf 

 //i.e flowers = 1.235

 const createVectorsFromDocs = processedDocs => {
    const tfidf = new TfIdf();
  
    processedDocs.forEach(processedDocument => {
      tfidf.addDocument(processedDocument.content);
    });
  
    const documentVectors = [];
  
    for (let i = 0; i < processedDocs.length; i += 1) {
      const processedDocument = processedDocs[i];
      const obj = {};
  
      const items = tfidf.listTerms(i);
  
      for (let j = 0; j < items.length; j += 1) {
        const item = items[j];
        obj[item.term] = item.tfidf;
      }
  
      const documentVector = {
        id: processedDocument.id,
        vector: new Vector(obj)
      };
      documentVectors.push(documentVector);
    }
}

//finally we are getting id and vector 
//now lets calculate similarites  with similarity and the dot product
// using vector object packages to calculate the cosine similarites.
//once calculated we push them into an array that contains the image id and
// the recommended image from the training.Again we will sort them with highest similarity 
//is first in the array
// * Calculates the similarities between 2 vectors
// * getCosineSimilarity creates the dotproduct and the 
// * length of the 2 vectors to calculate the cosine 
// * similarity
// */
const calcSimilarities = docVectors => {
  // number of results that you want to return.
  const MAX_SIMILAR = 20; 
  // min cosine similarity score that should be returned.
  const MIN_SCORE = 0.2;
  const data = {};

  for (let i = 0; i < docVectors.length; i += 1) {
    const documentVector = docVectors[i];
    const { id } = documentVector;

    data[id] = [];
  }

  for (let i = 0; i < docVectors.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      const idi = docVectors[i].id;
      const vi = docVectors[i].vector;
      const idj = docVectors[j].id;
      const vj = docVectors[j].vector;
      const similarity = vi.getCosineSimilarity(vj);

      if (similarity > MIN_SCORE) {









        data[idi].push({ id: idj, score: similarity });
        data[idj].push({ id: idi, score: similarity });
      }
    }
  }

  // finally sort the similar documents by descending order
  Object.keys(data).forEach(id => {
    data[id].sort((a, b) => b.score - a.score);

    if (data[id].length > MAX_SIMILAR) {
      data[id] = data[id].slice(0, MAX_SIMILAR);
    }
  });

  return data;
}
// Under the hood, the getCosineSimilarity method is doing a number of things.

// It generates the dot product, this operation takes 2 vectors and returns a single (scalar) number. It is a simple multiplication of each component in both vectors added together.
a = [1.7836, 3]
b = [4, 0.5945]

//a.b = 1.7836 * 4 + 3 *0.5945 = 8.9176;
// With the dot product calculated we just need to reduce the vector values of each document down to scalar values. This is done by taking the square root of each value multiplied by itself added together. The getLength method below is doing this calculation.
const getLength = () => {
  let l = 0;

  this.getComponents().forEach(k => {
    l += this.vector[k] * this.vector[k];
  });

  return Math.sqrt(l);
}
// The actual cosine similarity formula looks like this:
// cosine0 = a.b/||a||.||b||
// and in javascript looks like this:
const getCosineSimilarity = (vector) => {
  return this.getDotProduct(vector) / (this.getLength() * vector.getLength());
}
// 2. Getting our recommendations
// Now we have completed the training phase we can simply request the recommended images from the training data.
const getSimilarDocuments = (id, trainedData) => {
  let similarDocuments = trainedData[id];

  if (similarDocuments === undefined) {
    return [];
  }

  return similarDocuments;
};

// This will return an array of objects containing the recommended images and their cosine similarity score.
// e.g
[ 
  { id: '14.jpg', score: 0.341705472305971 },
  { id: '9.jpg', score: 0.3092133517794513 },
  { id: '1.jpg', score: 0.3075994367748345 } 
]