chrome.extension.sendRequest({words: extract_words(document.referrer)});

highlighted = false;

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (!sender.tab && request.command == "toggle") {
      if (!highlighted) {
        highlight(request.words);
      } else {
        $(document.body).removeHighlight();
      }
      highlighted = !highlighted;
    }
  });

