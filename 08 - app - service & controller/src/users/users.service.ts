import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: "Ali", role: "Developer" },
        { id: 2, name: "Faiz", role: "Developer" },
        { id: 3, name: "Salman", role: "Developer" },
        { id: 4, name: "Ayesha", role: "Student" },
        { id: 5, name: "Aamna", role: "Student" }
    ];

    createOne(data: { name: string, role: 'Student' | 'Developer' }) {
        const newUser = { id: this.users.length + 1, ...data };
        this.users.push(newUser);
        return newUser;
    }

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find((user) => user.id === id);
    }

    updateOne(id: number, data: { name: string, role: 'Student' | 'Developer' }) {
        this.users = this.users.map((user) => {
            if(user.id === id) {
                return { ...user, ...data };
            }
            return user;
        });
        return this.users.find((user) => user.id === id);
    }

    deleteOne(id: number) {
        const removedUser = this.users.find((user) => user.id === id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}