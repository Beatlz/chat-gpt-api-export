import { appendCopyChatButton } from "./appendCopyChatButton"
import { SELECTOR_CHATS_TO_API_BUTTON } from "./chat.types"

export const watchCopyChatButton = () => {
	const waitForNavElement = setInterval(() => {
		const navElement = document.querySelector(`nav`)

		if (!navElement) {
			return
		}

		clearInterval(waitForNavElement)
	
		navElement.addEventListener(`click`, () => {
			const watcher = setInterval(() => {
				const copyChatButton = document.querySelector(SELECTOR_CHATS_TO_API_BUTTON)
		
				if (!copyChatButton) {
					appendCopyChatButton()

					clearInterval(watcher)
				} 
			}, 100)
		})
	}, 100)
}
