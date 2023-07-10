import { appendCopyChatButton } from "./appendCopyChatButton"
import { SELECTOR_CHATS_TO_API_BUTTON } from "./chat.types"

export const watchCopyChatButton = () => {
	const navElement = document.querySelector(`nav`)
	
	navElement.addEventListener(`click`, () => {
		const watcher = setInterval(() => {
			const copyChatButton = document.querySelector(SELECTOR_CHATS_TO_API_BUTTON)
	
			if (!copyChatButton) {
				appendCopyChatButton()

				clearInterval(watcher)
			} 
		}, 100)
	})
}
