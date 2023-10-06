import { Request, Response, request } from 'express';
import { prismaClient } from '../database/prismaClient';


export const createTeam = async (request: Request, response: Response) => {
  try {
    const { name, foundation } = request.body;

    const team = await prismaClient.team.create({
      data: {
        name,
        foundation,
      },
    });

    return response.json(team);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while creating a team.' });
  }
}

export const findTeams = async (request: Request, response: Response) => {
  try {
    const team = await prismaClient.team.findMany();
    return response.status(200).json(team)
  }
  catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while creating a team.' });
  }
}

export const getTeamById = async (request: Request, response: Response) => {
  try {
    const team = await prismaClient.team.findUnique({
      where: {
        id: request.params.id,
      },
    });

    if (!team) {
      return response.status(404).json({ error: 'Team not found.' });
    }
    return response.status(200).json(team)
  }
  catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while creating a team.' });
  }
}

export const updateTeamById = async(request: Request, response:Response) => {
  try {
    const team = await prismaClient.team.findUnique({where:{id:request.params.id}});
    if(!team){
      return response.status(404).json({err: 'Nothing Team'})
    }
    const updateTeam = await prismaClient.team.update({where:{id: request.params.id}, data: request.body})
    return response.status(200).json(updateTeam)
    
  } catch (error) {
    return response.status(500).json({ error: 'An error occurred while updating the championship.' })
  }
}


export const deleteTeamById = async(request:Request, response:Response) =>{
  try {
    await prismaClient.team.delete({
      where: {
        id: request.params.id,
      },
    });

    return response.status(204).send();
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while deleting the championship.' });
  }
}