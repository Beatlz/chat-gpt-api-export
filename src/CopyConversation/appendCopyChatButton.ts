import { ChatExtractor } from "~/ConversationExtractor/ChatExtractor"
import { SELECTOR_NEW_CHAT_BUTTON, SELECTOR_CHATS_TO_API_BUTTON } from "./chat.types"
import { favoriteChatsButtonComponent } from "./favoriteChatsButtonComponent"

export const appendCopyChatButton = async () => {
	const chatExtractor = new ChatExtractor()
	
	if (chatExtractor.isNewChat()) {
		return
	}

	if (document.querySelector(SELECTOR_CHATS_TO_API_BUTTON)) {
		return
	}

	const newChatButton = document.querySelector(SELECTOR_NEW_CHAT_BUTTON)

	newChatButton.querySelector(`a`).insertAdjacentHTML(`afterend`, favoriteChatsButtonComponent)

	const openFavoriteChatsButtonElement = document.querySelector(SELECTOR_CHATS_TO_API_BUTTON)

	openFavoriteChatsButtonElement.addEventListener(`click`, async () => {
		try {
			chatExtractor.craftChat()

			if (chatExtractor.isNewChat()) {
				alert(`Nothing to copy!`)

				return
			}
			
			await chatExtractor.copyChat()

			alert(`${chatExtractor.chat.length} messages copied to clipboard in { role, content }[] format`)
		} catch (error) {
			console.error(`error copying conversation`)
			console.error(error)
		}
	})
}
