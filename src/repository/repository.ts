/* eslint-disable no-unused-vars */

export interface Repository<X extends { id: unknown }> {
  getAll(): Promise<X[]>;
  get(id: X['id']): Promise<X>;
  post(newData: Omit<X, 'id'>): Promise<X>;
  patch(id: X['id'], newData: Partial<X>): Promise<X>;
  delete(id: X['id']): Promise<void>;
}

/*
Se descrie un conjunto de métodos para interactuar con una fuente de datos.
Las implementaciones concretasde esta interfaz se usan para interactuar con diferentes
tipos de fuentes de datos.


*/
