/* eslint-disable lines-between-class-members */
import { NextFunction, Request, Response } from 'express';
import { escalador } from '../model/escalador.js';
import { ControllerStructure } from './controller.interface';
import { repository } from './controller.interface.js';

export class escaladorController implements ControllerStructure {
  constructor(private repo: repository<escalador>) {
    this.repo = repo;
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.repo.getAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const finalEscalador = await this.repo.post(req.body);
      res.status(201);
      res.json(finalEscalador);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await this.repo.getById(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
  async patch(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const finalEscalador = await this.repo.patch(id, req.body);
      res.json(finalEscalador);
    } catch (error) {
      next(error);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.repo.delete(id);
      res.status(204);
      res.json({});
    } catch (error) {
      next(error);
    }
  }
}
