/*
  Warnings:

  - You are about to drop the `_ChampionshipToPlayer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ChampionshipToPlayer" DROP CONSTRAINT "_ChampionshipToPlayer_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChampionshipToPlayer" DROP CONSTRAINT "_ChampionshipToPlayer_B_fkey";

-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_teamId_fkey";

-- DropTable
DROP TABLE "_ChampionshipToPlayer";

-- CreateTable
CREATE TABLE "_ChampionshipToTeam" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChampionshipToTeam_AB_unique" ON "_ChampionshipToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_ChampionshipToTeam_B_index" ON "_ChampionshipToTeam"("B");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionshipToTeam" ADD CONSTRAINT "_ChampionshipToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "championships"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionshipToTeam" ADD CONSTRAINT "_ChampionshipToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
