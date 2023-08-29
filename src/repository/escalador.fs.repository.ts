import { readFile, writeFile } from 'fs/promises';
import { escalador, escaladorNoID } from '../model/escalador';
import { HttpError } from '../model/http.error.js';
import { Repository } from './repository';

export class repository implements Repository<escalador> {
  private file: string;
  constructor() {
    this.file = 'data.json';
  }

  private async saveData(data: escalador[]) {
    // Aki
    await writeFile(this.file, JSON.stringify(data), { encoding: 'utf-8' });
  }

  async getAll(): Promise<escalador[]> {
    const data: escalador[] = JSON.parse(
      await readFile(this.file, { encoding: 'utf-8' })
    );
    return data;
  }

  async getbyid(id: escalador['id']): Promise<escalador> {
    const data: escalador[] = await this.getAll();
    const item = data.find((item) => item.id === id);
    if (!item)
      throw new HttpError(
        404,
        'Not Found',
        'escalador not found in file system',
        {
          cause: 'Trying getById',
        }
      );
    return item;
  }

  async post(newData: escaladorNoID): Promise<escalador> {
    const data: escalador[] = await this.getAll();
    const newEscalador: escalador = {
      ...newData,
      id: Math.floor(Math.random() * 9999).toString(),
    };
    data.push(newEscalador);
    await this.saveData(data);
    return newEscalador;
  }

  async patch(
    id: escalador['id'],
    item: Partial<escalador>
  ): Promise<escalador> {
    const data: escalador[] = await this.getAll();
    const index = data.findIndex((item) => item.id === id);
    if (index < 0)
      throw new HttpError(
        404,
        'Not Found',
        'escalador not found in file system',
        {
          cause: 'Trying update',
        }
      );
    data[index] = { ...data[index], ...item };
    await this.saveData(data);
    return data[index];
  }

  async delete(id: escalador['id']): Promise<void> {
    const data: escalador[] = await this.getAll();
    const index = data.findIndex((item) => item.id === id);
    if (index < 0)
      throw new HttpError(
        404,
        'Not Found',
        'escalador not found in file system',
        {
          cause: 'Trying delete',
        }
      );
    data.splice(index, 1);

    await this.saveData(data);
  }
}
