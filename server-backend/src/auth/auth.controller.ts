import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { 
  ApiTags, 
  ApiOperation, 
  ApiBody, 
  ApiBearerAuth 
} from '@nestjs/swagger';

@ApiTags('Auth') // group in swagger
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register user' })
  @ApiBody({
    schema: {
      example: {
        email: 'test@test.com',
        password: '123456'
      }
    }
  })
  register(@Body() body: any) {
    return this.authService.register(body);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({
    schema: {
      example: {
        email: 'test@test.com',
        password: '123456'
      }
    }
  })
  login(@Body() body: any) {
    return this.authService.login(body);
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get user profile (Protected)' })
  @ApiBearerAuth() // 🔐 shows lock icon
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req: any) {
    return {
      message: 'Protected route',
      user: req.user,
    };
  }
}