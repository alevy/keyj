var highlight = function(words) {
  if (!words) return;
  $.each(words, function(i, word) {
    if (!word.toLowerCase().match("^a$|^and$|^the$|^an$|^with$|^for$|^in$|^but$")) {
      $(document.body).highlight(word);
    }
  });
}

