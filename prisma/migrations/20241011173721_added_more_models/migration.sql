-- CreateEnum
CREATE TYPE "Meal" AS ENUM ('fried_rice', 'jollof_rice', 'Egusi', 'Afang', 'Edikiakong', 'Banga', 'Bitter_leaf', 'Efo', 'Ewedu', 'Ogbono');

-- CreateTable
CREATE TABLE "reservation" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "numberOfPersons" INTEGER NOT NULL,
    "purpose" TEXT,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "meal" "Meal" NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reservation_id_key" ON "reservation"("id");
