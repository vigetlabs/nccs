# NCCS

## To install the site locally:

Command-line instructions

1. Clone the repo with `git clone future-address-here`
2. `cd` (navigate) into the repo
3. `bundle install` to load gems
4. `bundle exec jekyll serve` to spin the site up locally

Alternatively after you've set up the project, you can use the command shortcuts in the `Rakefile` to save yourself some typing:

|Command|Description|
|:---|:---|
|`rake dev`|Starts Jekyll locally|
|`rake build`|Run the Jekyll build process locally|

## Development Principles

- **No build system**
    - There is no build system (Webpack, Vite, etc) in order to:
       - Simplify - Removes extra steps required to deploy (such as generating assets)
       - Future-proof - Increases the chances this project will work without major updates for a long time to come.
       - Reduce dependencies - Removes the need to use Node or other environments in addition to Ruby to build the site.
    - This project instead relies on provided Jekyll SCSS support for styles and browser-supported ESM modules for JavaScript.
- **Github Pages enabled**
    - This project is designed to be used with Github Pages with no additional Github Action setup required.
    - To activate, go to Settings / Pages / Source -> Deploy from Branch, then select the `main` branch.
    - Any commits to the `main` branch will trigger a new build.

## Installation Troubleshooting

This project assumes that:

- A relatively recent version of Ruby has been installed on your machine.
    - `which ruby` will tell you if and where Ruby has been installed on your machine.
    - `ruby --version` will give you the version of Ruby installed.
- You have sufficient privileges to install Ruby gems via `bundle install`

## Other Troubleshooting

- When previewing the site locally and a `:baseurl` has been set in the `_config.yml` file, you'll need to make sure that there is a trailing slash.
    - Example: `http://127.0.0.1:4000/nccs/` instead of `http://127.0.0.1:4000/nccs`
