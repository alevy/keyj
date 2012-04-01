chrome.extension.sendRequest({words: true});

highlighted = false;

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.command == "toggle") {
      if (!highlighted) {
        highlight(request.words);
      } else {
        $(document.body).removeHighlight();
      }
      highlighted = !highlighted;
    }
  });

