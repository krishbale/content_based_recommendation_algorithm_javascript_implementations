const Vector = require('vector-object');
const a = new Vector({ react: 1, nodejs: 2, angular: 1 });
const b = new Vector({ nodejs: 2, marko: 3, nextjs: 2 });
 
const similarity = a.getCosineSimilarity(b)
console.log(similarity);
console.log(Object.keys(a));
