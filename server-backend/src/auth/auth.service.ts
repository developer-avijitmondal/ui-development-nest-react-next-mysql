import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) { }

    async register(dto: { email: string; password: string }) {
        const { email, password } = dto;

        const exist = await this.userRepo.findOne({ where: { email } });
        if (exist) {
            throw new BadRequestException('User already exists');
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = this.userRepo.create({
            email,
            password: hashed,
        });

        await this.userRepo.save(user);

        return { message: 'Registered successfully' };
    }

    async login(dto: { email: string; password: string }) {
        const { email, password } = dto;

        const user = await this.userRepo.findOne({ where: { email } });
        if (!user) {
            throw new BadRequestException('User not found');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new BadRequestException('Wrong password');
        }

        return {
            message: 'Login successful',
            userId: user.id,
        };
    }
}
