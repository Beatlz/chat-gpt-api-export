import { DATA_ID_CHATS_TO_API_BUTTON } from "./chat.types"

export const favoriteChatsButtonComponent = `
<div
  data-id="${DATA_ID_CHATS_TO_API_BUTTON}"
  class="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center"
>
  <svg
    height="16px"
    width="16px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    xml:space="preserve"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <polyline id="primary" points="15 3 21 3 21 9" style="fill: none; stroke: #FFFFFF; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline>
      <line id="primary-2" data-name="primary" x1="11" y1="13" x2="21" y2="3" style="fill: none; stroke: #FFFFFF; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line>
      <path id="primary-3" data-name="primary" d="M21,13v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h7" style="fill: none; stroke: #FFFFFF; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
    </g>
   </svg>
</div>
`
