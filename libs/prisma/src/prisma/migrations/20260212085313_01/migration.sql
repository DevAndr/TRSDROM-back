-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "userUid" TEXT;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
