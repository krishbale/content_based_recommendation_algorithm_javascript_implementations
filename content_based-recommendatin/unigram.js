
  function createUnigrams(words) {
    var unigrams = words;
    return unigrams;
}

  function createBigrams(words) {
    var bigrams = [];
    for (var i = 0; i < words.length - 1; i++) {
        bigrams.push(words[i] + ' ' + words[i + 1]);
    }
    return bigrams;
}

  function createTrigrams(words) {
    var trigrams = [];
    for (var i = 0; i < words.length - 2; i++) {
        trigrams.push(words[i] + ' ' + words[i + 1] + ' ' + words[i + 2]);
    }
    return trigrams;
}

// var words = [
//   'logitech',            'meetup',             'conference',
//   'cam',                 '-',                  '4k',
//   'sensor',              '120°',               'fov',
//   'integrated',          'mics',               'speakers',
//   'electronics',         'logitech',           'meetup',
//   'premier',             'conferencecam',      'designed',
//   'small',               'conference',         'rooms',
//   'huddle',              'rooms',             'room',
//   'capturing',           'super-wide',         '120°',
//   'field',               'view',              'meetup',
//   'makes',               'every',              'seat',
//   'table',               'clearly',            'visible',
//   'motorized',           'pan/tilt',           'widens',
//   'fov',                 '175°',              'low-distortion',      
//   'logitech-engineered', 'lens',              'ultra',
//   'hd',                  '4k',                 'optics',
//   'three',               'camera',             'presets',
//   'deliver',             'remarkable',         'video',
//   'quality',             'enhance',            'face-to-face',        
//   'collaboration',       'meetup’s',           'integrated',
//   'audio',               'optimized',          'huddle',
//   'room',                'acoustics',          'delivers',
//   'exceptional',         'sound',              'experience',
//   'three',               'horizontally-aimed', 'beam-forming',        
// ]
let unigrams = createUnigrams(words);
let bigrams = createBigrams(words);
let trigrams = createTrigrams(words);
let token = [].concat(unigrams,bigrams,trigrams);
console.log(token);

