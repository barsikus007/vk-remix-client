//@ts-nocheck
import { VK } from 'vk-io';

const vk = new VK({
    token: process.env.TOKEN
});

export async function messages() {
  const response = await vk.api.messages.getConversations({
    count: 10,
    extended: true,
  });
  return response
}

export async function messagesHistory({chat}) {
  const response = await vk.api.messages.getHistory({
    peer_id: chat,
    count: 10,
    extended: true,
  });
  return response
}
