import { Request, Response, request } from "express";
import { prismaClient } from "../database/prismaClient";


export const createTeamChampion =async (request:Request, response:Response) => {
    try {
        const {id_team, id_championship} = request.body
        const teamChampion = await prismaClient.teamChampionship.create({
            data:{
                id_team,
                id_championship,
            }
        })
        return response.status(201).json(teamChampion)
    } catch (error) {
        return response.status(500).json({ error: 'An error occurred while create the championship.' });   
    }
}


export const createChampionshipWithTeam =async (request:Request, response:Response) => {
    try {
        const { name, startDate, endDate, id_team } = request.body
        const teamChampion = await prismaClient.teamChampionship.create({
            data:{
                championship: {
                    create:{
                        name,
                        startDate,
                        endDate,
                    }
                },
                team: {
                    connect:{
                        id: id_team,
                    }
                }
            }
        })
        return response.status(201).json(teamChampion)
    } catch (error) {
        return response.status(500).json({ error: 'An error occurred while creating the championship.' });   
    }
}

export const findTeamChampionshp = async(request:Request, response:Response) => {
    try {
        const team_championship = await prismaClient.teamChampionship.findMany()
        return response.status(200).json(team_championship)
    } catch (error) {
        return response.status(500).json({ error: 'An error occurred while fetching teamchampionship.' });
    }
}