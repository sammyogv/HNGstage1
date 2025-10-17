// Example: tests/profile-card.test.js

// Test 1: Check if profile card exists
function testProfileCardExists() {
    const profileCard = document.querySelector('[data-testid="test-profile-card"]');
    if (profileCard) {
        console.log('✅ Test 1 PASSED: Profile card found');
        return true;
    } else {
        console.log('❌ Test 1 FAILED: Profile card not found');
        return false;
    }
}

// Test 2: Check if user name exists
function testUserNameExists() {
    const userName = document.querySelector('[data-testid="test-user-name"]');
    if (userName && userName.textContent.trim().length > 0) {
        console.log('✅ Test 2 PASSED: User name found:', userName.textContent);
        return true;
    } else {
        console.log('❌ Test 2 FAILED: User name not found');
        return false;
    }
}

// Test 3: Check if avatar exists
function testAvatarExists() {
    const avatar = document.querySelector('[data-testid="test-user-avatar"]');
    if (avatar && avatar.hasAttribute('alt')) {
        console.log('✅ Test 3 PASSED: Avatar found with alt text');
        return true;
    } else {
        console.log('❌ Test 3 FAILED: Avatar missing or no alt text');
        return false;
    }
}

// Test 4: Check if time is in milliseconds
function testTimeInMilliseconds() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        const timeValue = parseInt(timeElement.textContent);
        if (timeValue > 1000000000000) {
            console.log('✅ Test 4 PASSED: Time is in milliseconds');
            return true;
        }
    }
    console.log('❌ Test 4 FAILED: Time not in milliseconds');
    return false;
}

// Test 5: Check if hobbies list exists
function testHobbiesExist() {
    const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
    if (hobbies && hobbies.children.length > 0) {
        console.log('✅ Test 5 PASSED: Hobbies list found with', hobbies.children.length, 'items');
        return true;
    } else {
        console.log('❌ Test 5 FAILED: Hobbies list empty or not found');
        return false;
    }
}

// Run all tests
function runAllTests() {
    console.log('🧪 Running Profile Card Tests...\n');
    testProfileCardExists();
    testUserNameExists();
    testAvatarExists();
    testTimeInMilliseconds();
    testHobbiesExist();
    console.log('\n✨ Tests complete!');
}

// Run tests when page loads
runAllTests();