


function updateTime(){
    const timeNow= document.getElementById("currentTime")
    timeNow.textContent= Date.now()
}

updateTime()

setInterval(updateTime, 100)


const bioElement = document.querySelector('p[data-testid="test-user-bio"]');

if (bioElement) {
    function isClamped(el) {
        return el.scrollHeight > el.clientHeight;
    }

    function initBioExpansion() {
        if (isClamped(bioElement)) {
            const expandBtn = document.createElement('button');
            expandBtn.textContent = 'Read More';
            expandBtn.setAttribute('aria-expanded', 'false');
            expandBtn.style.cssText = `
                background: none;
                border: none;
                color: #667eea;
                font-weight: 600;
                cursor: pointer;
                padding: 0.25rem 0;
                margin-top: 0.5rem;
            `;

            expandBtn.addEventListener('click', () => {
                const isExpanded = bioElement.classList.contains('expanded');
                bioElement.classList.toggle('expanded');
                expandBtn.textContent = isExpanded ? 'Read More' : 'Read Less';
                expandBtn.setAttribute('aria-expanded', !isExpanded);
            });

            bioElement.parentElement.insertBefore(expandBtn, bioElement.nextSibling);
        }
    }

    setTimeout(initBioExpansion, 1000);
}


const avatarUpload = document.getElementById('avatarUpload');
const avatarImg = document.querySelector('img[data-testid="test-user-avatar"]');

if (avatarUpload && avatarImg) {
    // When user selects a file
    avatarUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];  // Get the selected file
        
        if (file) {
            // Check if it's an image
            if (file.type.startsWith('image/')) {
                // Create a FileReader to convert file to URL
                const reader = new FileReader();
                
                // When file is read, update the image
                reader.onload = (e) => {
                    avatarImg.src = e.target.result;  // e.target.result is the image URL
                };
                
                // Read the file as a data URL
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file');
            }
        }
    });
    
    // Optional: Trigger file input when clicking the image
    avatarImg.addEventListener('click', () => {
        avatarUpload.click();
    });
}

