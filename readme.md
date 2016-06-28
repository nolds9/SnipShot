# SnipShot

A CLI app to replace markdown code snippets with screenshots

## CLI Usage
> **Note**: Requires [PhantomJS](http://phantomjs.org/) to be installed.
If you're using OSX and have Homebrew installed, this can be done with
`$brew install phantomjs`

To use, run the following scripts from the root directory of any lesson:

First, pass the url to the markdown file you want to crawl..

```bash
# pass the url to the markdown file to parse as an argument
$ phantomjs app.js https://github.com/ga-wdi-lessons/activerecord-intro
# this will output screenshots in a directory /images
```

Then, replace the code snippets with screenshots in your markdown file...

```bash
# pass the name of the markdown file and redirect to the name of the file to create
$ node markdown.js readme.md > new_readme.md # creates a file called new_readme.md
# assumes you are in the same directory as the images directory
```

## Bugs/Issues

Please file an issue on [this repository](https://github.com/nolds9/markdown-code-to-png/issues) or
feel free to submit a pull request!
