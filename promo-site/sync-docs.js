const fs = require('fs-extra');
const path = require('path');

async function syncDocs() {
  const srcDocs = path.join(__dirname, '../docs');
  const srcReadme = path.join(__dirname, '../README.md');
  const destDocs = path.join(__dirname, 'content/docs');

  try {
    // Ensure destination exists
    await fs.ensureDir(destDocs);
    
    // Copy docs folder
    if (await fs.pathExists(srcDocs)) {
      await fs.copy(srcDocs, destDocs);
      console.log('Docs synced successfully.');
    }

    // Copy README.md as well
    if (await fs.pathExists(srcReadme)) {
      await fs.copy(srcReadme, path.join(destDocs, 'README.md'));
      console.log('README synced successfully.');
    }
  } catch (err) {
    console.error('Error syncing docs:', err);
  }
}

syncDocs();
