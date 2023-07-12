const fs = require('fs');
const { execSync } = require('child_process');

const build = () => {
  // Clean up the dist directory
  const distDir = 'dist';
  if (fs.existsSync(distDir)) {
    fs.rmdirSync(distDir, { recursive: true });
  }
  fs.mkdirSync(distDir);

  // Copy necessary files to the dist directory
  fs.copyFileSync('server.js', `${distDir}/server.js`);
  fs.copyFileSync('.env', `${distDir}/.env`);
  fs.mkdirSync(`${distDir}/public`);
  fs.mkdirSync(`${distDir}/public/pages`);
  fs.copyFileSync('public/index.html', `${distDir}/public/index.html`);
  fs.copyFileSync('public/pages/birthinfo.html', `${distDir}/public/pages/birthinfo.html`);
  fs.copyFileSync('public/pages/contact.html', `${distDir}/public/pages/contact.html`);

  // Install dependencies in the dist directory
  execSync('npm ci --production', { cwd: distDir, stdio: 'inherit' });

  console.log('Build completed successfully.');
};

// Call the build function
build();
