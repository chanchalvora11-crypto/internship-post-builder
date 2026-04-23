document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const generateBtn = document.getElementById('generateBtn');
    const btnText = generateBtn.querySelector('span');
    const outputSection = document.getElementById('outputSection');
    const postOutput = document.getElementById('postOutput');
    const copyBtn = document.getElementById('copyBtn');
    const themeToggle = document.getElementById('themeToggle');
    const historyList = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');

    // --- Simple Theme Toggle ---
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? 'Dark Mode' : 'Light Mode';
    });

    // --- History Logic ---
    let history = JSON.parse(localStorage.getItem('postHistory')) || [];

    const renderHistory = () => {
        if (history.length === 0) {
            historyList.innerHTML = '<p class="empty-msg">No posts saved yet.</p>';
            return;
        }
        historyList.innerHTML = history.map((post, index) => `
            <div class="history-item" onclick="loadFromHistory(${index})">
                <div class="history-info">
                    <strong>${post.company}</strong> - ${post.role}
                    <span>${post.date}</span>
                </div>
                <div class="history-preview">${post.content.substring(0, 60)}...</div>
            </div>
        `).join('');
    };

    window.loadFromHistory = (index) => {
        const post = history[index];
        postOutput.textContent = post.content;
        outputSection.classList.remove('hidden');
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    clearHistoryBtn.addEventListener('click', () => {
        if(confirm('Clear all saved posts?')) {
            history = [];
            localStorage.removeItem('postHistory');
            renderHistory();
        }
    });

    // --- Form Submission ---
    postForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        btnText.textContent = 'Generating...';
        generateBtn.disabled = true;

        const formData = new FormData(postForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to generate');

            const result = await response.json();
            
            // Show result
            postOutput.textContent = result.post;
            outputSection.classList.remove('hidden');
            outputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Save to history
            const newEntry = {
                company: data.company,
                role: data.role,
                content: result.post,
                date: new Date().toLocaleDateString()
            };
            history.unshift(newEntry);
            if (history.length > 10) history.pop(); // Keep last 10
            localStorage.setItem('postHistory', JSON.stringify(history));
            renderHistory();

        } catch (error) {
            alert('Something went wrong. Try again!');
            console.error(error);
        } finally {
            btnText.textContent = 'Generate Post';
            generateBtn.disabled = false;
        }
    });

    // --- Copy Logic ---
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(postOutput.textContent).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied! ✅';
            setTimeout(() => copyBtn.textContent = originalText, 2000);
        });
    });

    renderHistory();
});
