() => {
  const currentProject = process.env.PROJECT_NAME;
  const lastDeployedCommit = process.env.CACHED_COMMIT_REF;
  const latestCommit = 'HEAD';
  const projectHasChanged = projectChanged(
    currentProject,
    lastDeployedCommit,
    latestCommit
  );
  if (!projectHasChanged) {
    process.exit(1);
  }

  process.exit(0);
};

function projectChanged(currentProject, fromHash, toHash) {
  const execSync = require('child_process').execSync;
  const getAffected = `npx nx print-affected --base=${fromHash} --head=${toHash}`;
  const output = execSync(getAffected).toString();
  //get the list of changed projects from the output
  const changedProjects = JSON.parse(output).projects;
  if (changedProjects.find((project) => project === currentProject)) {
    return true;
  } else {
    return false;
  }
}
