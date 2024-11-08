import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: "Ali", role: "Developer" },
        { id: 2, name: "Faiz", role: "Developer" },
        { id: 3, name: "Salman", role: "Developer" },
        { id: 4, name: "Ayesha", role: "Student" },
        { id: 5, name: "Aamna", role: "Student" }
    ];

    createOne(data: CreateUserDto) {
        const newUser = { id: this.users.length + 1, ...data };
        this.users.push(newUser);
        return newUser;
    }

    updateOne(id: number, data: UpdateUserDto) {
        this.users = this.users.map((user) => {
            if(user.id === id) {
                return { ...user, ...data };
            }
            return user;
        });
        return this.users.find((user) => user.id === id);
    }
}