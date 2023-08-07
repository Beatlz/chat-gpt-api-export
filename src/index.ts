import { appendCopyChatButton } from "./CopyConversation/appendCopyChatButton"
import { observeURL } from "./utils/observeURL"

observeURL(() => {
	appendCopyChatButton()
})
