document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const generateBtn = document.getElementById('generateBtn');
    const loader = document.getElementById('loader');
    const btnText = generateBtn.querySelector('span');
    const outputSection = document.getElementById('outputSection');
    const postOutput = document.getElementById('postOutput');
    const copyBtn = document.getElementById('copyBtn');

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
            copyBtn.classList.add('success');
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('success');
            }, 2000);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});
