/*
  Warnings:

  - You are about to drop the column `time` on the `reservation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reservation" DROP COLUMN "time",
ALTER COLUMN "numberOfPersons" SET DATA TYPE TEXT;
