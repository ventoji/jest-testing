// __tests__/FileSummarizer-test.js
'use strict';

jest.mock('fs');
// To opt out of this behavior you will need to explicitly 
// call jest.unmock('moduleName')

// To ensure that a manual mock and its real implementation
//  stay in sync, it might be useful to require the real module 
// using jest.requireActual(moduleName) in your manual mock 
// and amending it with mock functions before exporting it.

describe('listFilesInDirectorySync', () => {
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  test('includes all files in the directory in the summary', () => {
    const FileSummarizer = require('./FileSummarizer');
    const fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
      '/path/to',
    );

    expect(fileSummary.length).toBe(2);
  });
});