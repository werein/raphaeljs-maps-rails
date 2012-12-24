# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'raphaeljs-maps-rails/version'

Gem::Specification.new do |gem|
  gem.name          = "raphaeljs-maps-rails"
  gem.version       = Raphaeljs::Maps::Rails::VERSION
  gem.authors       = ["Jiri Kolarik"]
  gem.email         = ["jiri.kolarik@imin.cz"]
  gem.description   = %q{TODO: Maps for Raphael JavaScript library}
  gem.summary       = %q{TODO: JS maps}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]
end
