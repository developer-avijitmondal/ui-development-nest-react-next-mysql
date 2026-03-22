import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    register(dto: any): Promise<{
        message: string;
    }>;
    login(dto: any): Promise<{
        message: string;
        access_token: string;
    }>;
}
