import authenticate from './authenticate';
import restrictToTelegram from './restrict-to-telegram';
import restrictToChatAdmin from './restrict-to-chat-admin';
import restrictToChatMember from './restrict-to-chat-member';
import patchOrCreateMessageUsers from './patch-or-create-message-users';
import patchMessageUserChat from './patch-message-user-chat';
import patchOrCreateMessageChats from './patch-or-create-message-chats';
import isTelegram from './is-telegram';
import isBotCommand from './is-bot-command';
import isChatType from './is-chat-type';

export default {
  authenticate,
  restrictToTelegram,
  restrictToChatAdmin,
  restrictToChatMember,
  patchOrCreateMessageUsers,
  patchMessageUserChat,
  patchOrCreateMessageChats,
  isTelegram,
  isBotCommand,
  isChatType
};
