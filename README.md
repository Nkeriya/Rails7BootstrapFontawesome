# README

steps:

1. `gem 'sassc-rails'`, `gem 'bootstrap'`
2. add `config.sass.inline_source_maps = true`, `config.sass.line_comments = false`, run `rm -r tmp/cache/assets`
   to: config/environments/development.rb

3. Delete app/assets/stylesheets/application.css
4. Create new app/assets/stylesheets/application.scss and add line: `@import "bootstrap";`
5. In config/initializers/assets.rb, add: `Rails.application.config.assets.precompile += %w[application.scss]`

6. Run below commands:

- bin/importmap pin jquery
- bin/importmap pin @popperjs/core
- bin/importmap pin bootstrap

7. Add this to app/javascript/application.js
   `import "jquery";`
   `import "@popperjs/core";`
   `import "bootstrap";`

- Popper.js: process not defined issue- https://github.com/rails/importmap-rails/issues/65
