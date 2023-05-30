# NCCS


## To install the site locally:

Command-line instructions

1. Clone the repo with `git clone future-address-here`
2. `cd` (navigate) into the repo
3. `bundle install` to load 

## Development Principles

- No build system
    - There is no build system (Webpack, Vite, etc) in order to:
       - Simplify - Removes extra steps required to deploy.
       - Future-proof - Less tooling means less things need to be updated
       - Reduce dependencies - Removes the need to use Node or other environments to
    - This project instead relies on provided Jekyll SCSS support for styles and browser-supported ESM modules for JavaScript.
- Github Pages enabled
    - This project is designed to be used with Github Pages.

## Troubleshooting

This project assumes that:

- A relatively recent version of Ruby has been installed on your machine.
    - `which ruby` will tell you if and where Ruby has been installed on your machine.
    - `ruby --version` will give you the version of Ruby installed.
- You have sufficient privileges to install Ruby gems via `bundle install`
