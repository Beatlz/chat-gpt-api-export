/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require(`fs`)

const MANIFEST = {
	"name": `ExportChatToAPI`,
	"version": `1.0`,
	"manifest_version": 3,
	"content_scripts": [
		{
			"matches": [`https://chat.openai.com/*`],
			"js": [`bundle.js`],
		},
	],
	"permissions": [`tabs`],
}

const PATH = `./dist/manifest.json`

const writeManifest = () => {
	fs.writeFileSync(PATH, JSON.stringify(MANIFEST))
}

writeManifest()

console.log(`Manifest written at ${PATH}`)
