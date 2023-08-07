type GenericCallback = (..._args: unknown[]) => void;

export const observeURL = (callback: GenericCallback) => {
	let previousUrl = ``

	const observer = new MutationObserver(() => {
		if (location.href !== previousUrl) {
			previousUrl = location.href

			callback(previousUrl)
		}
	})

	const config = { subtree: true, childList: true }

	observer.observe(document, config)
}
