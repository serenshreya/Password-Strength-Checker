const passwordInput = document.getElementById('passwordInput');
const strengthText = document.getElementById('strength');
const messageText = document.getElementById('message');
passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;

    if (!val) {
        messageText.innerText = 'None';
        return;
    }

    if (val.length > 12) score++;
    if (/[A-Z]/.test(val)) score++; 
    if (/[0-9]/.test(val)) score++; 
    if (/[^A-Za-z0-9]/.test(val)) score++; 

    // Display Result
    const strengths = ['Aww Weak 🔴', 'Okayishhh try  🟠', 'would be better  🟡', ' Fantastic !!  🟢'];
    strengthText.innerText = strengths[Math.min(score, 3)];
});