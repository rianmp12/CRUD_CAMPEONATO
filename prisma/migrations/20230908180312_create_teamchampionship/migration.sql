/*
  Warnings:

  - You are about to drop the `_ChampionshipToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ChampionshipToTeam" DROP CONSTRAINT "_ChampionshipToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChampionshipToTeam" DROP CONSTRAINT "_ChampionshipToTeam_B_fkey";

-- DropTable
DROP TABLE "_ChampionshipToTeam";

-- CreateTable
CREATE TABLE "team_championship" (
    "id" TEXT NOT NULL,
    "id_team" TEXT NOT NULL,
    "id_championship" TEXT NOT NULL,

    CONSTRAINT "team_championship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "team_championship" ADD CONSTRAINT "team_championship_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_championship" ADD CONSTRAINT "team_championship_id_championship_fkey" FOREIGN KEY ("id_championship") REFERENCES "championships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
