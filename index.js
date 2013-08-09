
/**
 * Expose `match`.
 */

module.exports = match;

/**
 * Check if `query`'s words each match
 * at least one string in `fields`.
 *
 * @param {String} query
 * @param {Array[String]} fields
 * @return {Boolean}
 */

function match (query, fields) {
  var queryWords = query
  .toLowerCase()
  .split(' ')
  .filter(Boolean);
  
  var fieldWords = fields
    .join(' ')
    .split(' ')
    .filter(Boolean)
    .map(function (word) {
      return word.toLowerCase();
    });

  if (!queryWords.length) return true;

  return queryWords.every(function (qword) {
    return fieldWords.some(function (word) {
      return word.indexOf(qword) > -1;
    });
  });
}
