/**
 * Test script to verify API fixes
 * Run with: node test-api-fix.js
 */

const API_BASE_URL = 'https://api.echoreads.online/api/v1';

async function testDirectAPI() {
  console.log('🧪 Testing Direct API Access...');
  
  try {
    // Test magazines endpoint
    console.log('📡 Testing magazines endpoint...');
    const response = await fetch(`${API_BASE_URL}/user/magzines`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('📊 Response status:', response.status);
    console.log('📊 Response headers:', Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Direct API works! Data:', {
        success: data.success,
        message: data.message,
        dataLength: Array.isArray(data.data) ? data.data.length : 'not array',
      });
    } else {
      const errorText = await response.text().catch(() => 'Unable to read error');
      console.log('❌ Direct API failed:', response.status, errorText.substring(0, 200));
    }
  } catch (error) {
    console.log('❌ Direct API error:', error.message);
  }
}

async function testNextJSAPI() {
  console.log('\n🧪 Testing Next.js API Routes...');
  
  try {
    // Test Next.js API route (this will only work when the Next.js server is running)
    console.log('📡 Testing Next.js magazines endpoint...');
    const response = await fetch('http://localhost:3000/api/magazines', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('📊 Response status:', response.status);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Next.js API works! Data:', {
        success: data.success,
        message: data.message,
        dataLength: Array.isArray(data.data) ? data.data.length : 'not array',
      });
    } else {
      const errorText = await response.text().catch(() => 'Unable to read error');
      console.log('❌ Next.js API failed:', response.status, errorText.substring(0, 200));
    }
  } catch (error) {
    console.log('❌ Next.js API error (server might not be running):', error.message);
    console.log('💡 Start the Next.js server with: npm run dev');
  }
}

async function testAuth() {
  console.log('\n🧪 Testing Authentication...');
  
  try {
    // Test login endpoint
    console.log('📡 Testing login endpoint...');
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'testpassword'
      }),
    });

    console.log('📊 Login response status:', response.status);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Login API works! Response:', {
        success: data.success,
        message: data.message,
        hasToken: !!data.data?.token,
      });
    } else {
      const errorText = await response.text().catch(() => 'Unable to read error');
      console.log('❌ Login API failed (expected for invalid credentials):', response.status, errorText.substring(0, 200));
    }
  } catch (error) {
    console.log('❌ Login API error:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API Fix Tests...\n');
  
  await testDirectAPI();
  await testNextJSAPI();
  await testAuth();
  
  console.log('\n✅ Tests completed!');
  console.log('\n📋 Summary:');
  console.log('1. If Direct API works: The backend is accessible');
  console.log('2. If Next.js API works: The proxy routes are working');
  console.log('3. If both work: Your API issues should be fixed!');
  console.log('\n💡 Next steps:');
  console.log('1. Start the Next.js server: npm run dev');
  console.log('2. Open http://localhost:3000 in your browser');
  console.log('3. Check browser console for API logs');
  console.log('4. Try logging in or viewing magazines');
}

runTests().catch(console.error);