NODE = $(shell which node)
WEBPACK_BIN = ./node_modules/webpack/bin/webpack.js
MAIN = src/index.es6.js
OUTPUT_DIR = ./dist
OUTPUT = build

$(OUTPUT_DIR):
	@mkdir -p $(OUTPUT_DIR)

clean:
	rm -r $(OUTPUT_DIR)

# Build the file for development.
build: | $(OUTPUT_DIR)
	@$(NODE) $(WEBPACK_BIN) $(MAIN) $(OUTPUT_DIR)/$(OUTPUT).js

.PHONY: build
.DEFAULT_GOAL = build

# Build the file for production, minifying and disabling source maps.
build-min: | $(OUTPUT_DIR)
	@$(NODE) $(WEBPACK_BIN) $(MAIN) $(OUTPUT_DIR)/$(OUTPUT).min.js \
		--optimize-minimize \
		--devtool NONE

.PHONY: build-min
