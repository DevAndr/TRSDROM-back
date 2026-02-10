import { Test, TestingModule } from '@nestjs/testing';
import { MsStoreController } from './ms-store.controller';
import { MsStoreService } from './ms-store.service';

describe('MsStoreController', () => {
  let storeController: MsStoreController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsStoreController],
      providers: [MsStoreService],
    }).compile();

    storeController = app.get<MsStoreController>(MsStoreController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(storeController.getHello()).toBe('Hello World!');
    });
  });
});
