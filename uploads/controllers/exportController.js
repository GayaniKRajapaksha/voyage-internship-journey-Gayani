// const { Parser } = require('json2csv');
// const fs = require('fs');
// const path = require('path');
// const { setCache, getCache } = require('../utils/redisCache');

// exports.exportData = async (req, res) => {
//   const cacheKey = 'exportData';
//   const cachedData = await getCache(cacheKey);

//   if (cachedData) {
//     return res.send({ message: 'Serving from cache', data: cachedData });
//   }

//   const data = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 }
//   ]; // Replace with DB query

//   const parser = new Parser();
//   const csv = parser.parse(data);
//   const filePath = path.join(__dirname, '../data/exports/data.csv');

//   fs.writeFileSync(filePath, csv);

//   // Cache the data
//   await setCache(cacheKey, data, 600); // 10 minutes

//   res.download(filePath, 'data.csv');
// };




const { Parser } = require('json2csv');
const fs = require('fs');
const path = require('path');
const { setCache, getCache } = require('../utils/redisCache');

exports.exportData = async (req, res) => {
  const cacheKey = 'exportData';
  const cachedData = await getCache(cacheKey);

  const data = cachedData || [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
  ]; // Replace with DB query

  // Ensure the export directory exists
  const exportDir = path.join(__dirname, '../data/exports');
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
  }

  const parser = new Parser();
  const csv = parser.parse(data);
  const filePath = path.join(exportDir, 'data.csv');

  // Write CSV to file
  fs.writeFileSync(filePath, csv);

  // Cache the data if not already cached
  if (!cachedData) {
    await setCache(cacheKey, data, 600); // 10 minutes
  }

  res.download(filePath, 'data.csv');
};
