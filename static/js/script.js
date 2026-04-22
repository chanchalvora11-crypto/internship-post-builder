document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const generateBtn = document.getElementById('generateBtn');
    const loader = document.getElementById('loader');
    const btnText = generateBtn.querySelector('span');
    const outputSection = document.getElementById('outputSection');
    const postOutput = document.getElementById('postOutput');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const themeToggle = document.getElementById('themeToggle');

    // --- Dark Mode Logic ---
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    postForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        btnText.textContent = 'Generating...';
        loader.style.display = 'block';
        generateBtn.disabled = true;

        const formData = new FormData(postForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to generate post');

            const result = await response.json();
            
            // Display result
            postOutput.textContent = result.post;
            outputSection.classList.remove('hidden');
            
            // Scroll to output
            outputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

        } catch (error) {
            alert('Something went wrong. Please try again.');
            console.error(error);
        } finally {
            // Reset button
            btnText.textContent = 'Generate Post';
            loader.style.display = 'none';
            generateBtn.disabled = false;
        }
    });

    // Copy to Clipboard Functionality
    copyBtn.addEventListener('click', () => {
        const textToCopy = postOutput.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied! ✅';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });

    // Download as .txt Functionality
    downloadBtn.addEventListener('click', () => {
        const text = postOutput.textContent;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'LinkedIn_Post.txt';
        a.click();
        window.URL.revokeObjectURL(url);
    });
});
