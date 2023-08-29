/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export interface ControllerStructure {
  getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
  getById(req: Request, res: Response, next: NextFunction): Promise<void>;
  post(req: Request, res: Response, next: NextFunction): Promise<void>;
  patch(req: Request, res: Response, next: NextFunction): Promise<void>;
  delete(req: Request, res: Response, next: NextFunction): Promise<void>;
}
