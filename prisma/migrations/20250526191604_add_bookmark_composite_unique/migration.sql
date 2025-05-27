/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_id_userId_key" ON "Bookmark"("id", "userId");
