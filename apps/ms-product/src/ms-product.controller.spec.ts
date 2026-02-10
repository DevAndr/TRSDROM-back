import { Test, TestingModule } from '@nestjs/testing';
import { MsProductController } from './ms-product.controller';
import { MsProductService } from './ms-product.service';

describe('MsProductController', () => {
  let msProductController: MsProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsProductController],
      providers: [MsProductService],
    }).compile();

    msProductController = app.get<MsProductController>(MsProductController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msProductController.getHello()).toBe('Hello World!');
    });
  });
});
