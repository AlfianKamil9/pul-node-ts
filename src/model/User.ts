class User {
  id_user: number;
  name: string;
  email: string;
  password: string;
  is_active: boolean;
  role_id: number;

  constructor(id_user: number, name: string, email: string, password: string, is_active: boolean, role_id: number) {
    this.id_user = id_user;
    this.name = name;
    this.email = email;
    this.password = password;
    this.is_active = is_active;
    this.role_id = role_id;
  }
}

export default User;
