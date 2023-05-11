const natural = require('natural');
const Vector = require('vector-object');
const { TfIdf, PorterStemmer, NGrams } = natural;
///
 let tokens = [
    'name',
    'balkrishna',
    '500',
    '6868',
    'iliv',
    'khana',
    'apppl',
    'appl',
    'appl',
    'appl',
    'appl',
    'furit',
    'furit',
    'fairli',
    'sportingli',
    'balkrishna_500',
    '500_6868',
    'khana_apppl',
    'apppl_appl',
    'appl_appl',
    'appl_appl',
    'appl_appl',
    'appl_furit',
    'furit_furit',
    'furit_fairli',
    'fairli_sportingli',
    'balkrishna_500_6868',
    'khana_apppl_appl',
    'apppl_appl_appl',
    'appl_appl_appl',
    'appl_appl_appl',
    'appl_appl_furit',
    'appl_furit_furit',
    'furit_furit_fairli',
    'furit_fairli_sportingli'
  ]
  
const tfidf = new TfIdf();
hash = {}
  tfidf.addDocument(tokens);
  
const items = 1
 const documentVectors = [];
 const item = 1
 hash[item.term] = item.tfidf
 vector = new Vector(hash)
console.log(vector);
 
 