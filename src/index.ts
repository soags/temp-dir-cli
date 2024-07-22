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
  .option('--no-open', 'create the directory without opening it.')
  .action((title, options) => {
    createDirectoryIfNotExists(DIR)

    cleanup(DIR)

    const directoryPath = getFolderPath(DIR, title, options.newDirectory)

    createDirectoryIfNotExists(directoryPath)

    if (options.open) {
      openDirectoryInExplorer(directoryPath)
    }
  })

program.parse(process.argv)
