// website/apis.js
import * as nationService from './services.js';

export function test(req, res) {
  return res.json({
    success: true,
    message: 'Active session',
    data: ':)'
  });
}

export async function listNations(req, res, next) {
  try {
    // Llamamos al servicio para obtener las naciones
    const nations = await nationService.fetchAll();
    // respuesta ok
    return res.status(200).json({
      success: true,
      message: 'Active session',
      data: nations,
      error: null
    });
  } catch (error) {
    // mostrar detalle del error 
    console.error(error.stack);
    // respuesta error
    return res.status(500).json({
      success: false,
      message: 'Error en listar los paises',
      data: null,
      error: error.message
    });
  }
}

/**
 * Obtener una nación por su ID (ej. /api/nations/:id)
 */
export async function getNationById(req, res, next) {
  try {
    const { id } = req.params;
    const nation = await nationService.fetchById(id);

    // Validación si no existe el registro en la BD
    if (!nation) {
      return res.status(404).json({
        success: false,
        message: 'Nación no encontrada',
        data: null,
        error: `No existe la nación con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Nación obtenida con éxito',
      data: nation,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al buscar la nación',
      data: null,
      error: error.message
    });
  }
}

/**
 * Crear una nueva nación (POST)
 */
export async function createNation(req, res) {
  try {
    console.log('0 ++++++++++++++++++++')
    console.log(req.body)
    const newNation = await nationService.create(req.body);
    console.log('1 ++++++++++++++++++++')
    console.log(newNation)
    console.log('2 ++++++++++++++++++++')
    return res.status(201).json({
      success: true,
      message: 'Nación creada con éxito',
      data: newNation,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al crear la nación',
      data: null,
      error: error.message
    });
  }
}

/**
 * Actualizar una nación existente (PUT)
 */
export async function updateNation(req, res) {
  try {
    const { id } = req.params;
    const updatedNation = await nationService.update(id, req.body);

    if (!updatedNation) {
      return res.status(404).json({
        success: false,
        message: 'Nación no encontrada',
        data: null,
        error: `No existe la nación con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Nación actualizada con éxito',
      data: updatedNation,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar la nación',
      data: null,
      error: error.message
    });
  }
}

/**
 * Eliminar una nación (DELETE)
 */
export async function deleteNation(req, res) {
  try {
    const { id } = req.params;
    const deleted = await nationService.remove(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Nación no encontrada',
        data: null,
        error: `No existe la nación con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Nación eliminada con éxito',
      data: null,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar la nación',
      data: null,
      error: error.message
    });
  }
}