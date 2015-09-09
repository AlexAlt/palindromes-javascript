var isPalindrome = function(sentence) {
  var condensedSentence = String(sentence).split(" ").join('');
  var reversedSentence = condensedSentence.split('').reverse().join('');

  return condensedSentence === reversedSentence;
}

$(document).ready(function() {
  $('form#palindrome-form').submit(function(event) {
    var palindrome = isPalindrome($('input#user-input').val());

    if (palindrome) {
      $('.not').text('');
      $('.palin').fadeIn();
      $('body').css({
        backgroundImage: 'url(./img/fey-palin-side-by-side.jpg)'
        ,backgroundRepeat: 'repeat'
      });
      $('#result').css({
        color: "#66FF33"
      });
    } else {
      $('.not').text('not');
    }

    $('#result').fadeIn();
    event.preventDefault();
  });
});
