import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export default function ChatsPage(props) {
    // const chatProps = useMultiChatLogic(props.project_id, props.user.username, props.user.secret);
  return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId={props.project_id}
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
  )
}
