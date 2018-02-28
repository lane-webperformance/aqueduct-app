all: build

build:
	yarn install --force
	yarn build

test:
	yarn test

clean:
	yarn add rimraf --dev
	yarn run clean
