const form = document.getElementById('contactForm');
const nameInput = document.querySelector('[data-testid="test-contact-name"]');
const emailInput = document.querySelector('[data-testid="test-contact-email"]');
const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
const messageInput = document.querySelector('[data-testid="test-contact-message"]');
const successMessage = document.querySelector('[data-testid="test-contact-success"]');

const errorName = document.querySelector('[data-testid="test-contact-error-name"]');
const errorEmail = document.querySelector('[data-testid="test-contact-error-email"]');
const errorSubject = document.querySelector('[data-testid="test-contact-error-subject"]');
const errorMessage = document.querySelector('[data-testid="test-contact-error-message"]');

function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        showError(nameInput, errorName, 'Full name is required');
        return false;
    }
    if (name.length < 2) {
        showError(nameInput, errorName, 'Name must be at least 2 characters');
        return false;
    }
    clearError(nameInput, errorName);
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError(emailInput, errorEmail, 'Email is required');
        return false;
    }
    if (!emailRegex.test(email)) {
        showError(emailInput, errorEmail, 'Please enter a valid email (e.g., name@example.com)');
        return false;
    }
    clearError(emailInput, errorEmail);
    return true;
}

function validateSubject() {
    const subject = subjectInput.value.trim();
    if (subject === '') {
        showError(subjectInput, errorSubject, 'Subject is required');
        return false;
    }
    if (subject.length < 3) {
        showError(subjectInput, errorSubject, 'Subject must be at least 3 characters');
        return false;
    }
    clearError(subjectInput, errorSubject);
    return true;
}

function validateMessage() {
    const message = messageInput.value.trim();
    if (message === '') {
        showError(messageInput, errorMessage, 'Message is required');
        return false;
    }
    if (message.length < 10) {
        showError(messageInput, errorMessage, 'Message must be at least 10 characters');
        return false;
    }
    clearError(messageInput, errorMessage);
    return true;
}

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
}

function clearError(input, errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.classList.remove('error');
    input.setAttribute('aria-invalid', 'false');
}

function clearAllErrors() {
    clearError(nameInput, errorName);
    clearError(emailInput, errorEmail);
    clearError(subjectInput, errorSubject);
    clearError(messageInput, errorMessage);
}

function showSuccessMessage() {
    successMessage.style.display = 'block';
    form.style.display = 'none';
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    successMessage.setAttribute('tabindex', '-1');
    successMessage.focus();
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        clearError(nameInput, errorName);
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        clearError(emailInput, errorEmail);
    }
});

subjectInput.addEventListener('input', () => {
    if (subjectInput.value.trim() !== '') {
        clearError(subjectInput, errorSubject);
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        clearError(messageInput, errorMessage);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.style.display = 'none';
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        showSuccessMessage();
        console.log('Form submitted successfully:', {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
        });
    } else {
        if (!isNameValid) nameInput.focus();
        else if (!isEmailValid) emailInput.focus();
        else if (!isSubjectValid) subjectInput.focus();
        else if (!isMessageValid) messageInput.focus();
    }
});
