var isPalindrome = function(sentence) {
  var condensedSentence = String(sentence).split(" ").join('');
  var reversedSentence = condensedSentence.split('').reverse().join('');

  return condensedSentence === reversedSentence;
}

$(document).ready(function() {
  $('form#palindrome-form').submit(function(event) {
    var palindrome = isPalindrome($('input#user-input').val());

    $('.not').text('');
    if (!palindrome) {
      $('.not').text('not');
    }

    $('#result').fadeIn();
    event.preventDefault();
  });
});
