describe("isPalindrome", function() {
  it('returns false if word not palindrome', function() {
    expect(isPalindrome('hello')).to.equal(false);
  });

  it('returns true if it is a palindrome', function() {
    expect(isPalindrome('racecar')).to.equal(true);
  });

  it('returns true if string of words is a palindrome', function() {
    expect(isPalindrome('a man a plan a canal panama')).to.equal(true);
  });

  it('returns true if a number is a palindrome', function() {
    expect(isPalindrome(8008)).to.equal(true);
  });
});
