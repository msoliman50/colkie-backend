import { Room } from 'src/domain/entities';
import { UsersMapper } from '../users/users.mapper';
import { RoomDocument } from './room.schema';

export class RoomsMapper {
  static schemaToModel(roomDocument: RoomDocument): Room {
    const room = new Room();
    room.id = roomDocument._id;
    room.messages = roomDocument.messages;
    room.users = roomDocument.users.map((userDocument) =>
      UsersMapper.schemaToModel(userDocument),
    );
    return room;
  }
}
