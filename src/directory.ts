import fs from "node:fs";
import path from "path";
import { format } from "date-fns";

export function getFolderPath(
  parentPath: string,
  title: string | undefined,
  newDirectory: boolean
): string {
  let folderPath = path.join(parentPath, format(new Date(), "yyyy-MM-dd"));
  if (title) {
    folderPath = `${folderPath}_${title}`;
  }

  if (newDirectory) {    
    let index = 1;
    let newFolderPath = folderPath;
    while (fs.existsSync(newFolderPath)) {
      newFolderPath = `${folderPath}_${index}`;
      index++;
    }
    folderPath = newFolderPath;
  }
  
  return folderPath;
}

export function createDirectoryIfNotExists(directoryPath: string) {
  if (!fs.existsSync(directoryPath)) {      
    fs.mkdirSync(directoryPath, { recursive: true });
  }
}