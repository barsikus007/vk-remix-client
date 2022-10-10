//@ts-nocheck
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import type { MessagesGetConversationsResponse } from "vk-io/lib/api/schemas/responses";

import { messages } from '~/utils/vk.server';
import { camera_50 } from "~/consts/assets";
import ObjectExplorer from "~/components/ObjectExplorer";


export const loader = async () => {
  resp = await messages()
  return json(resp);
}

export default function Chats() {
  const { count, items, profiles }: MessagesGetConversationsResponse = useLoaderData();
  return (
    <>
      <div>Count: 10/{count}</div>
      <ul>
        {items.map((message) => (
          <li key={message.conversation.peer.id}>
            <img src={
              message.conversation.chat_settings?.photo?.photo_50 || camera_50
            } alt="No" />
            <Link
              to={''+message.conversation.peer.id}
              className="text-xl text-blue-600 underline"
            >
              {message.conversation?.chat_settings?.title ?? 'No title'}
            </Link>
            <ObjectExplorer obj={message} />
          </li>
        ))}
      </ul>
    </>
  );
}