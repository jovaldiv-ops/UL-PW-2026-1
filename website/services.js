//website/services.js

import nationRepository from './repositories.js';

/**
 * Obtener todas las naciones
 */
export const fetchAll = async () => {
  const nations = await nationRepository.findAll();

  return nations.map(nation => nation.toJSON());
};

/**
 * Obtener una nación por su ID
 */
export const fetchById = async (id) => {
  const nation = await nationRepository.findById(id);

  if (!nation) {
    return null; // O lanzar un error personalizado si prefieres
  }

  return nation.toJSON();
};

/**
 * Servicio para crear una nación
 */
export const create = async (data) => {
  const newNation = await nationRepository.create(data);
  return newNation.toJSON();
};

/**
 * Servicio para actualizar una nación
 */
export const update = async (id, data) => {
  const updatedNation = await nationRepository.update(id, data);
  if (!updatedNation) return null;
  return updatedNation.toJSON();
};

/**
 * Servicio para eliminar una nación
 */
export const remove = async (id) => {
  return await nationRepository.delete(id);
};