import fs from 'node:fs'
import path from 'path'

export function cleanup(parentPath: string) {
  fs.readdirSync(parentPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .forEach((dirent) => {
      const directoryPath = path.join(parentPath, dirent.name)

      const files = fs.readdirSync(directoryPath)
      if (files.length === 0) {
        fs.rmdirSync(directoryPath)
      }
    })
}
