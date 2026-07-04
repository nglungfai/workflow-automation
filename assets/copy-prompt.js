// Copy-to-clipboard for "Try it" prompt boxes (.try-box). One shared script,
// event-delegated, so any post can add a .try-box without extra wiring.
document.addEventListener('click', function (event) {
  var btn = event.target.closest('.try-copy-btn');
  if (!btn) return;

  var row = btn.closest('.try-box-row');
  var textEl = row ? row.querySelector('.try-box-text') : null;
  if (!textEl) return;

  var text = textEl.textContent.trim();

  function showCopied() {
    var original = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1500);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied, function () {
      fallbackCopy(text, showCopied);
    });
  } else {
    fallbackCopy(text, showCopied);
  }
});

function fallbackCopy(text, onDone) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
  } catch (e) {
    // Clipboard unavailable — user can still select the visible text manually.
  }
  document.body.removeChild(ta);
  onDone();
}
