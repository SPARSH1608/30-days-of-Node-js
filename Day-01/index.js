const { readFile } = require('fs');

function readFileContent(filePath) {
  readFile(filePath, 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
