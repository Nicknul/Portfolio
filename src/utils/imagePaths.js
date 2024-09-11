const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '../..');
const imageDir = path.join(projectRoot, 'public/imgs');
console.log(imageDir);

const getImagesByProjectName = (projectName) => {
  const projectDir = path.join(imageDir, projectName);

  if (fs.existsSync(projectDir)) {
    const images = fs
      .readdirSync(projectDir)
      .filter((file) => ['.png', '.jpg', '.jpeg'].includes(path.extname(file).toLowerCase()))
      .map((file) => path.join(`/imgs/${projectName}`, file));

    return images;
  } else {
    console.log(`폴더가 존재하지 않습니다: ${projectName}`);
    return [];
  }
};

const cardTitle = 'ERP';
const imagesForProject = getImagesByProjectName(cardTitle);
console.log(imagesForProject);
