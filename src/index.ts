import os from "os";
import path from "path";
import { Command } from "commander";
import { openDirectoryInExplorer } from "./open";
import { createDirectoryIfNotExists, getFolderPath } from "./directory";
import { cleanup } from "./cleanup";

const DIR = path.join(os.homedir(), "tmp");

const program = new Command();

program
  .argument("[title]", "Title to add to the directory")
  .option("-n, --new-directory", "Create the directory with different name, if the directory already exists.")
  .option("--no-open", "Create the directory without opening it.")
  .action((title, options) => {
    createDirectoryIfNotExists(DIR);

    cleanup(DIR);

    const directoryPath = getFolderPath(DIR, title, options.newDirectory);
    
    createDirectoryIfNotExists(directoryPath);

    if (options.open) {
      openDirectoryInExplorer(directoryPath);
    }
  });

program.parse(process.argv);


