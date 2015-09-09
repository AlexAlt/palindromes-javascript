var isPalindrome = function(sentence) {
  var condensedSentence = sentence.split(" ").join('');
  var reversedSentence = condensedSentence.split('').reverse().join('');

  return condensedSentence === reversedSentence;
}
