import { Test, TestingModule } from '@nestjs/testing';
import { MsUserController } from './ms-user.controller';
import { MsUserService } from './ms-user.service';

describe('MsUserController', () => {
  let userController: MsUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsUserController],
      providers: [MsUserService],
    }).compile();

    userController = app.get<MsUserController>(MsUserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userController.getHello()).toBe('Hello World!');
    });
  });
});
