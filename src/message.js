const supportedTypes = [
  'text',
  'photo',
  'audio',
  'voice',
  'video',
  'video_note',
  'document',
  'sticker',
  'contact',
  'location',
  'venue'
];

const mediaTypes = [
  'photo',
  'audio',
  'voice',
  'video',
  'video_note',
  'document',
  'sticker'
];

export default class Message {

  constructor (message) {
    Object.assign(this, message);
  }

  getCreator () {
    return this.forward_from ? this.forward_from.id : this.from.id;
  }

  getCreatorSentAt () {
    return this.forward_date ? new Date(this.forward_date * 1000) : new Date(this.date * 1000);
  }

  getEditedAt () {
    return this.edit_date ? new Date(this.edit_date * 1000) : new Date(this.date * 1000);
  }

  getSentAt () {
    return new Date(this.date * 1000);
  }

  getType () {
    let type;
    for(var key in this) {
      supportedTypes.forEach(supportedType => {
        if(key == supportedType) {
          type = key;
        }
      });
    }
    return type;
  }

  hasEntity (entityType) {
    const entities = this.entities;
    let hasEntity = false;
    if(entities && entities.length) {
      entities.forEach(entity => {
        if(entity.type == entityType)
          hasEntity = true;
      });
    }
    return hasEntity;
  }

  isBotCommand () {
    if(this.hasEntity('bot_command')) {
      // Any slash following a string receives the bot command entity
      if(this.text.indexOf('/') == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getMediaId () {
    const type = this.getType();
    const media = this[type];
    if(Array.isArray(media) && media[0].file_id) {
      return media.map(item => { return item.file_id; });
    } else if(media.file_id) {
      return media.file_id;
    } else {
      return null;
    }
  }

  getContent () {
    const type = this.getType();
    if(mediaTypes.indexOf(type) !== -1) {
      return this.caption || null;
    } else {
      return this[type];
    }
  }

  getUrls () {
    const urls = [];
    if(this.entities && this.entities.length) {
      this.entities.forEach(entity => {
        if(entity.type == 'url') {
          const start = entity.offset;
          const end = start + entity.length;
          urls.push({
            url: this.text.slice(start, end),
            offset: entity.offset,
            length: entity.length
          });
        }
      });
    }
    return urls;
  }

  toPost () {
    const type = this.getType();
    if(type !== undefined && !this.isBotCommand()) {
      const post = {
        id: this.message_id,
        sentAt: this.getSentAt(),
        creatorSentAt: this.getCreatorSentAt(),
        editedAt: this.getEditedAt(),
        type: type,
        content: this.getContent(),
        mediaId: this.getMediaId(),
        userId: this.from.id,
        chatId: this.chat.id,
        creatorId: this.getCreator()
      };
      if(this.entities) {
        post.entities = this.entities;
      }
      return post;
    }
    return false;
  }
}
