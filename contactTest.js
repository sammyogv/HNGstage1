// Contact Page Tests

function testContactPageElements() {
    console.log('🧪 Running Contact Page Tests...\n');
    
    let passedTests = 0;
    let totalTests = 0;
    
    // Test 1: Name input exists
    totalTests++;
    const nameInput = document.querySelector('[data-testid="test-contact-name"]');
    if (nameInput) {
        console.log('✅ Test 1 PASSED: Name input found');
        passedTests++;
    } else {
        console.log('❌ Test 1 FAILED: Name input not found');
    }
    
    // Test 2: Email input exists
    totalTests++;
    const emailInput = document.querySelector('[data-testid="test-contact-email"]');
    if (emailInput) {
        console.log('✅ Test 2 PASSED: Email input found');
        passedTests++;
    } else {
        console.log('❌ Test 2 FAILED: Email input not found');
    }
    
    // Test 3: Subject input exists
    totalTests++;
    const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
    if (subjectInput) {
        console.log('✅ Test 3 PASSED: Subject input found');
        passedTests++;
    } else {
        console.log('❌ Test 3 FAILED: Subject input not found');
    }
    
    // Test 4: Message textarea exists
    totalTests++;
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');
    if (messageInput) {
        console.log('✅ Test 4 PASSED: Message textarea found');
        passedTests++;
    } else {
        console.log('❌ Test 4 FAILED: Message textarea not found');
    }
    
    // Test 5: Submit button exists
    totalTests++;
    const submitBtn = document.querySelector('[data-testid="test-contact-submit"]');
    if (submitBtn) {
        console.log('✅ Test 5 PASSED: Submit button found');
        passedTests++;
    } else {
        console.log('❌ Test 5 FAILED: Submit button not found');
    }
    
    // Test 6: Error messages exist
    totalTests++;
    const errorName = document.querySelector('[data-testid="test-contact-error-name"]');
    const errorEmail = document.querySelector('[data-testid="test-contact-error-email"]');
    const errorSubject = document.querySelector('[data-testid="test-contact-error-subject"]');
    const errorMessage = document.querySelector('[data-testid="test-contact-error-message"]');
    if (errorName && errorEmail && errorSubject && errorMessage) {
        console.log('✅ Test 6 PASSED: All error message elements found');
        passedTests++;
    } else {
        console.log('❌ Test 6 FAILED: One or more error message elements not found');
    }

    // Summary
    console.log(`\n📝 Summary: ${passedTests} out of ${totalTests} tests passed.`);
}

// Run the tests
testContactPageElements();
