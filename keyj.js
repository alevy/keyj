var highlight = function(words) {
  if (!words) return;
  $.each(words, function(i, word) {
    if (!word.toLowerCase().match("^a$|^and$|^the$|^an$|^with$|^for$|^in$|^but$")) {
      $(document.body).highlight(word);
    }
  });
}

var extract_words = function(url) {
  var matches = document.referrer.match("google.com/.*q=([^&]*)");
  if (matches) {
    return matches[1].split(/\+|%20/);
  } else {
    return null;
  }
}
