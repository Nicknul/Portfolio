const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '../..');
const imageDir = path.join(projectRoot, 'public/imgs');
console.log(imageDir);

const getImagesFromFolder = (folderPath, projectName) =>
  fs
    .readdirSync(folderPath)
    .filter((file) => ['.png', '.jpg', '.jpeg'].includes(path.extname(file).toLowerCase()))
    .map((file) => path.join(`/imgs/${projectName}`, file));

export const getAllProjectImages = () => {
  const directories = fs.readdirSync(imageDir).filter((name) => fs.lstatSync(path.join(imageDir, name)).isDirectory());

  const allImages = directories.reduce((acc, projectName) => {
    const projectDir = path.join(imageDir, projectName);
    acc[projectName] = getImagesFromFolder(projectDir, projectName);
    return acc;
  }, {});

  return allImages;
};

const allProjectImages = getAllProjectImages();
