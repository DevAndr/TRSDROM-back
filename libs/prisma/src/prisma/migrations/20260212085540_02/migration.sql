/*
  Warnings:

  - You are about to drop the column `userUid` on the `Store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_userUid_fkey";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "userUid",
ADD COLUMN     "uid" TEXT;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
