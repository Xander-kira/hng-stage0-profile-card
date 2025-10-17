// Time (ms) updater
const timeEl = document.getElementById('time');
const setNow = () => { timeEl.textContent = String(Date.now()); };
setNow();
const timer = setInterval(setNow, 1000);
window.addEventListener('beforeunload', () => clearInterval(timer));

// Avatar URL & file upload support
const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
const urlInput  = document.getElementById('avatar-url');
const fileInput = document.getElementById('avatar-file');

if (urlInput) {
  urlInput.addEventListener('change', () => {
    const v = urlInput.value.trim();
    if (v) avatarImg.src = v;
  });
}

if (fileInput) {
  fileInput.addEventListener('change', () => {
    const f = fileInput.files?.[0];
    if (!f) return;
    const blobUrl = URL.createObjectURL(f);
    avatarImg.src = blobUrl;
  });
}
