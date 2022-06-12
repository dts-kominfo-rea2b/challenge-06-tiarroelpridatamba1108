// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

const filterData = (dataParsed) => {
  let temp;
  if (Array.isArray(dataParsed)) {
    if (dataParsed[0].message === undefined) {
      const splittedData = dataParsed[0].data.message.split(" ");
      temp = splittedData[1];
    } else {
      const splittedData = dataParsed[0].message.split(" ");
      temp = splittedData[1];
    }
  } else {
    const splittedData = dataParsed.message.split(" ");
    temp = splittedData[1];
  }
  return temp;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const temp = [];
  fs.readFile(file1, (err, data) => {
    if (err) {
      fnCallback(err, null);
    } else {
      const dataParsed = JSON.parse(data);
      const filteredData = filterData(dataParsed);
      temp.push(filteredData);
      fs.readFile(file2, (err, data) => {
        if (err) {
          fnCallback(err, null);
        } else {
          const dataParsed = JSON.parse(data);
          const filteredData = filterData(dataParsed);
          temp.push(filteredData);
          fs.readFile(file3, (err, data) => {
            if (err) {
              fnCallback(err, null);
            } else {
              const dataParsed = JSON.parse(data);
              const filteredData = filterData(dataParsed);
              temp.push(filteredData);
              fnCallback(null, temp);
            }
          });
        }
      });
    }
  });
};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
