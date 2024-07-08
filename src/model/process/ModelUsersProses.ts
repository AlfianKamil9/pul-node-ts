import UserQueries from '../../database/queries/UserQueries';
import User from '../User';
import pool from '../../database/index';

class ModelUsersProcess {
  static async getUserInterface<T>(): Promise<any[]> {
    const { rows } = await pool.query(UserQueries.getUser());
    const users: User[] = rows.map((row: { id: number; name: string; email: string; password: string }) => new User(row.id, row.name, row.email, row.password));
    return users;
  }
}

export default ModelUsersProcess;
