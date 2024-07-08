class User {
  id_user: number;
  name: string;
  email: string;
  password: string;

  constructor(id_user: number, name: string, email: string, password: string) {
    this.id_user = id_user;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;
