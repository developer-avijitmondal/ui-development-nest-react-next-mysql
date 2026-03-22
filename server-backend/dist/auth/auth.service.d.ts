import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    register(dto: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
    }>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        userId: number;
    }>;
}
