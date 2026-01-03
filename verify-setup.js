// Verification script to check if environment is set up correctly
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Next.js project setup...\n');

let allGood = true;

// Check .env.local
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  console.log('✅ .env.local file exists');
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (envContent.includes('API_BASE_URL')) {
    console.log('✅ API_BASE_URL is configured');
  } else {
    console.log('❌ API_BASE_URL not found in .env.local');
    allGood = false;
  }
} else {
  console.log('❌ .env.local file not found');
  allGood = false;
}

// Check package.json
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  console.log('✅ package.json exists');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  if (packageJson.dependencies.next) {
    console.log(`✅ Next.js version: ${packageJson.dependencies.next}`);
  }
} else {
  console.log('❌ package.json not found');
  allGood = false;
}

// Check key files
const keyFiles = [
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.js',
  'app/layout.tsx',
  'lib/api.ts',
  'lib/auth.ts',
  'middleware.ts'
];

console.log('\n📁 Checking key files:');
keyFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allGood = false;
  }
});

// Check public assets
const publicPath = path.join(__dirname, 'public');
if (fs.existsSync(publicPath)) {
  console.log('\n📦 Checking public assets:');
  const publicFiles = ['splash.png', 'app images'];
  publicFiles.forEach(file => {
    const filePath = path.join(publicPath, file);
    if (fs.existsSync(filePath)) {
      console.log(`✅ public/${file}`);
    } else {
      console.log(`⚠️  public/${file} - not found (optional)`);
    }
  });
}

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('✅ All checks passed! Project is ready to use.');
  console.log('\n🚀 Next steps:');
  console.log('   1. Run: npm run dev');
  console.log('   2. Open: http://localhost:3000');
  console.log('   3. Check .env.local for API configuration');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

