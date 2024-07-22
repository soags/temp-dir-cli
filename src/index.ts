#!/usr/bin/env node

import os from 'os'
import path from 'path'
import { Command } from 'commander'
import { openDirectoryInExplorer } from './open'
import { createDirectoryIfNotExists, getFolderPath } from './directory'
import { cleanup } from './cleanup'
import { version } from '../package.json'

const DIR = path.join(os.homedir(), 'temp')

const program = new Command()

program
  .name('temp')
  .version(version)
  .argument('[title]', 'title to add to the directory')
  .option(
    '-n, --new-directory',
    'create the directory with different name, if the directory already exists.',
  )
  .option('-q, --quiet', 'do not open the directory.')
  .option('--root', 'only open the root directory of the temporary directory.')
  .action((title, options) => {
    createDirectoryIfNotExists(DIR)

    cleanup(DIR)

    if (options.root) {
      openDirectoryInExplorer(DIR)
      return
    }

    const directoryPath = getFolderPath(DIR, title, options.newDirectory)

    createDirectoryIfNotExists(directoryPath)

    if (!options.quiet) {
      openDirectoryInExplorer(directoryPath)
    }
  })

program.parse(process.argv)
