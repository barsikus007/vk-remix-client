//@ts-nocheck
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import type { MessagesGetHistoryExtendedResponse } from "vk-io/lib/api/schemas/responses";

import { messagesHistory } from '~/utils/vk.server';


export const loader = async ({
  params,
}) => {
  resp = await messagesHistory(params)
  return json(resp);
}

export default function ChatById() {
  const { count, items, profiles, groups }: MessagesGetHistoryExtendedResponse = useLoaderData();
  return (
    <>
      <ul>
        <div>Count: 10/{count}</div>
        {items.map((message) => {
          return (
            <li key={message.conversation_message_id}>
              <Link to={`/chats/${message.from_id}`}>
                <img src={
                  profiles.find(e => e.id == message.from_id)?.photo_50 ??
                  groups.find(e => e.id == -message.from_id)?.photo_50 ??
                  'https://c5.rgstatic.net/m/4671872220764/images/template/default/profile/profile_default_m.jpg'
                } alt="No" />
              </Link>
              {message.text ?? 'No text'}
            </li>
          )
        })}
      </ul>
    </>
  );
}