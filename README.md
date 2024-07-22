# temp-dir-cli

This CLI tool creates a temporary directory and opens it in the explorer.

Upon execution, it creates a `yyyy-mm-dd` directory inside the `temp` directory in the home directory and opens that directory in the explorer. If the directory already exists, it opens the existing directory. Optionally, you can also create a new directory with a different name.

By specifying a title as an argument, you can create a `yyyy-mm-dd_[title]` directory.

During execution, it cleans up any empty directories inside the `temp` directory.

## Install

```
npm install -g temp-dir-cli
```

## Usage

You can use the tool with either of the following commands:

```powershell
temp [title] [options...]
```

Or

```powershell
temp-dir-cli [title] [options...]
```

### Options

| Argument                  | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| `title`                   | Title to add to the directory.                                             |
| `-n` or `--new-directory` | Create the directory with different name, if the directory already exists. |
| `-q, --quiet`             | Create the directory without opening it.                                   |
| `--root`                  | Only open the root directory of the temporary directory.                   |

### Example

#### Create a temporary directory

```
temp
```

This command will create a directory named with the current date, e.g., `2024-07-19`.

#### Create temporary directory with specified title

```
temp Foo
```

This command will create a directory named `2024-07-19_Foo`.

#### Create temporary directory with different name, if the directory already exists.

```
temp -n
```

If a directory named `2024-07-19` already exists, this command will create a directory named `2024-07-19_1`.
