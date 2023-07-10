export type ChatGPTRole = `assistant` | `user`

export interface SimpleChatMessage {
  content: string
  role: ChatGPTRole
}
