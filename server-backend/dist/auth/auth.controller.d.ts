import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: any): Promise<{
        message: string;
    }>;
    login(body: any): Promise<{
        message: string;
        userId: number;
    }>;
}
