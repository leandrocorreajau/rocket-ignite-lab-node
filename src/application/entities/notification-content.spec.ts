import { NotificationContent } from './notification-content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new NotificationContent(
      'Você recebeu a solicitação de amizade',
    );

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notificaton content with less than 5 characters', () => {
    expect(() => new NotificationContent('Novo')).toThrow();
  });

  it('should not be able to create a notificaton content with more than 240 characters', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrow();
  });
});
