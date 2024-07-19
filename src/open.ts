import { exec } from 'node:child_process'

export function openDirectoryInExplorer(directoryPath: string) {
  let command
  switch (process.platform) {
    case 'win32':
      command = `start "" "${directoryPath}"`
      break
    case 'darwin':
      command = `open ${directoryPath}`
      break
    default:
      command = `xdg-open ${directoryPath}`
      break
  }

  exec(command, (error) => {
    if (error) {
      console.error(error)
    }
  })
}
