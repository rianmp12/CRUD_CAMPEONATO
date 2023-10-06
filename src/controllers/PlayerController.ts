import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';



export const createPlayer = async(request: Request, response: Response) => {
  try {
    const { name, age, teamId } = request.body;

    const player = await prismaClient.player.create({
      data: {
        name,
        age,
        teamId,
      },
    });

    return response.json(player);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while creating a player.' });
  }
}

export const findPlayer = async(request: Request, response: Response) => {
  try {
    const players = await prismaClient.player.findMany();

    return response.json(players);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while fetching players.' });
  }
}

export const getPlayerById = async(request: Request, response: Response) => {
  try {
    const player = await prismaClient.player.findUnique({
      where: {
        id: request.params.id,
      },
    });

    if (!player) {
      return response.status(404).json({ error: 'Player not found.' });
    }

    return response.json(player);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while fetching the player.' });
  }
}

export const updatePlayerById = async(request: Request, response: Response) => {
  try {
    const player = await prismaClient.player.update({
      where: {
        id: request.params.id,
      },
      data: request.body
  });

    return response.json(player);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while updating the player.' });
  }
}

export const deletePlayerById = async(request: Request, response: Response) => {
  try {
    await prismaClient.player.delete({
      where: {
        id: request.params.id,
      },
    });

    return response.status(204).send();
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'An error occurred while deleting the player.' });
  }
}