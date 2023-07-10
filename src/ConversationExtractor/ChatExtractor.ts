import { isEven } from "~/utils/isEven"
import type { ChatGPTRole, SimpleChatMessage } from "./ChatExtractor.types"
import { SELECTOR_CHAT_MESSAGES } from "~/CopyConversation/chat.types"

export class ChatExtractor {
	private _chat: SimpleChatMessage[] = []

	get chat(): SimpleChatMessage[] {
		return this._chat
	}
	private set chat(chat: SimpleChatMessage[]) {
		this._chat = chat
	}

	async craftChat(): Promise<void> {
		const messageDivs = document.querySelectorAll(SELECTOR_CHAT_MESSAGES)
		const indexes = Object.keys(messageDivs)
		const chat = indexes.map((_, index) => {
			const div = messageDivs[index] as HTMLDivElement

			return {
				role: (isEven(index) ? `user` : `assistant`) as ChatGPTRole,
				content: (div).innerText,
			}
		})

		this.chat = chat
	}

	isNewChat(): boolean {
		return !this.chat.length
	}

	async copyChat() {
		await this.craftChat()
		await navigator.clipboard.writeText(JSON.stringify(this.chat, null, 2))
	}
}
