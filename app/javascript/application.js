// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import jquery from "jquery";
import "@popperjs/core";
import "bootstrap";
import "@fortawesome/fontawesome-free";
import "./new";

window.$ = jquery; // access '$' on custom js files
