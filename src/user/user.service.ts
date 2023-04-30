import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

const users: UserModel[] = [];

@Injectable()
export class UserService {
  getAllUsers(): UserModel[] {
    if (users.length === 0) {
      this.creatingMockData({
        birthDay: new Date(),
        email: "ramazanncelikk44@gmail.com",
        name: "Ramazan",
        surname: "Çelik",
        password: "123456",
      });
    }
    return users;
  }

  getUserById(id): any {
    const user = users.find(user => user.id == id);
    if (user) {
      return user;
    } else {
      return "user does not exist";
    }

  }

  createUser(body: UserCreateDto) {
    const isExist = users.find(res => { res.email === body.email });
    if (isExist) {
      return isExist;
    } else {
      this.creatingMockData(body);
      return users.slice(users.length - 1, users.length)
    }
  }

  private creatingMockData(data: any) {
    const user: UserModel = new UserModel();
    user.birthDay = data.birthDay;
    user.email = data.email;
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;

    user.id = (Math.floor(Math.random() * 60) + 1).toString();

    users.push(user);
  }
}
