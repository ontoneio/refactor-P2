# Phase 2 challenge quiz


- When you run a command in the terminal, where does BASH look for that command?
    *   BASH refers to the ~/.bashrc file or the $PATH variable as to look through a variable list of directories to execute both built-in commands and user defined commands. In my case these directories are : /usr/local/bin , /usr/bin , /bin , /usr/sbin , /sbin

- On a UNIX computer, how do you stop a running process?
    *   Use "ps aux" to list running processes. Take note of PID (Process ID) and use command "kill (PID)"

- What packages do you have installed via homebrew?
    *   casperjs, gdbm,	leiningen, node, pcre, pkg-config,	readline, sqlite, coreutils, gettext, mongodb, openssl,	pcre2, postgresql, redis, swig, fish, icu4c, nginx,	openssl@1.1, phantomjs,	python,	shellcheck,	zeromq

- On a UNIX computer, how do you find the process id of a running process?
    *   "ps aux" command or "pgrep [options] pattern"

- In a terminal, what does control-c do?
    *   Ctrl-c allows you to exit the current child process by sending a SIGINT signal from the kernel.

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve > Changes to USER Directory
$ mkdir foo > Makes directory /Users/steve/foo/
$ touch bar > makes a file named 'bar' in /Users/steve/
$ cd foo > Changes directory to /Users/steve/foo/
$ touch bar > Makes a file within foo/ directory named 'bar'
$ pwd > Prints the working directory /Users/steve/foo/
```
- How do you set an environment variable in your shell?
    * export VARNAME="value"

- What keyboard shortcut do you use to split the screen in 
your editor?
    *   Command + \

- How do you create an alias in your shell?
    *   alias aliasname='commands'

- When a terminal command completes, how can you tell if it was successful or not?
    *   It returns nothing unless a completion message was expressly set.

- What does your `~/.gitconfig` have in it? (paste the whole file here)
    ```
    *   [user]
        name = ontoneio
        email = ontoneio.mm@gmail.com
    *   [core]
        editor = fish
        excludesfile = /Users/ontoneio/.gitignore_global
    *   [alias]
        co = checkout
        br = branch
        ci = commit
        st = status

    ```

- What is the difference between a relative and absolute path?
    *   Absolute paths give a fully explicit locations on a harddrive that never changes regardless of working directory. A relative path starts from a relative location to the users current working directory.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?

    * ``` cp README.md ../pintrest-for-dogs/ ```

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
    *   Command + p

- What files or folders do you want all git repositories to ignore?

    -   *.com
    -   *.class
    -   *.dll
    -   *.exe
    -   *.o
    -   *.so

    -   *.7z
    -   *.dmg
    -   *.gz
    -   *.iso
    -   *.jar
    -   *.rar
    -   *.tar
    -   *.zip

    -   *.log    
    -   *.sql
    -   *.sqlite

    -   .DS_Store
    -   .DS_Store?
    -   ._*
    -   .Spotlight-V100
    -   .Trashes
    -   ehthumbs.db
    -   Thumbs.db


- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?

    *   Array.forEach always returns a value of undefined type and is not chainable. Array.map utilizes a given callback function for each element in the array, and constructs a new array from the results of the callback function.
