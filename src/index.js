const {getChangedFilesForRoots} = require('jest-changed-files');

// print the set of modified files since last commit in the current repo
getChangedFilesForRoots(['./'], {
  lastCommit: true,
}).then(result => console.log(result.changedFiles));

// Get the list of files and repos that have changed since the last commit.
