import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { CreateStorePayload, UpdateStorePayload } from '@app/contracts';

@Injectable()
export class MsStoreService {
  constructor(private readonly prisma: PrismaService) {}

  createStore(data: CreateStorePayload) {
    return this.prisma.store.create({ data });
  }

  deleteStore() {}

  updateStore(data: UpdateStorePayload) {
    const { id, ...other } = data;
    return this.prisma.store.update({ where: { id }, data: other });
  }

  getUserStores(uid: string) {
    return this.prisma.store.findMany({
      where: {
        uid,
      },
    });
  }

  getStores() {
    return this.prisma.store.findMany();
  }
}
