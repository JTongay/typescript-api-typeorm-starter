import { createConnection, Connection } from 'typeorm';

export class DBUtil {
  static async getConnection(): Promise<Connection> {
    return await createConnection();
  }
}
