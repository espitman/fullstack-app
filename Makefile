build:
	pnpm build
	rm -rf build
	mkdir -p build/api build/client
	cp -r api/dist/* build/api/
	cp -r client/dist/* build/client/
	$(MAKE) postbuild

postbuild:
	node scripts/postbuild.js

.PHONY: build postbuild 