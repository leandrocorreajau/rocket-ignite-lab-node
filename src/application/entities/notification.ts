import { randomUUID } from 'crypto';
import { Replace } from '../../helpers/Replace';
import { NotificationContent } from './notification-content';

export interface NotificationProps {
  recipientId: string;
  content: NotificationContent;
  category: string;
  reatAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }

  public set content(content: NotificationContent) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set reatAt(reatAt: Date | null | undefined) {
    this.props.reatAt = reatAt;
  }

  public get reatAt(): Date | null | undefined {
    return this.props.reatAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
