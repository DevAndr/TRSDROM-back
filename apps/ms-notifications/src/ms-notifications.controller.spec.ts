import { Test, TestingModule } from '@nestjs/testing';
import { MsNotificationsController } from './ms-notifications.controller';
import { MsNotificationsService } from './ms-notifications.service';

describe('MsNotificationsController', () => {
  let notificationsController: MsNotificationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsNotificationsController],
      providers: [MsNotificationsService],
    }).compile();

    notificationsController = app.get<MsNotificationsController>(
      MsNotificationsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notificationsController.getHello()).toBe('Hello World!');
    });
  });
});
