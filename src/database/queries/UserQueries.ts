class UserQueries {
  static getUser(): string {
    const sql = 'SELECT * FROM tb_user';
    return sql;
  }
}

export default UserQueries;
