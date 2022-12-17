import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notificaton: Notification): Promise<void>;
}
