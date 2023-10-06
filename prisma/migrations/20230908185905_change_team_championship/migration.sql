-- DropForeignKey
ALTER TABLE "team_championship" DROP CONSTRAINT "team_championship_id_championship_fkey";

-- DropForeignKey
ALTER TABLE "team_championship" DROP CONSTRAINT "team_championship_id_team_fkey";

-- AddForeignKey
ALTER TABLE "team_championship" ADD CONSTRAINT "team_championship_id_team_fkey" FOREIGN KEY ("id_team") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_championship" ADD CONSTRAINT "team_championship_id_championship_fkey" FOREIGN KEY ("id_championship") REFERENCES "championships"("id") ON DELETE CASCADE ON UPDATE CASCADE;
