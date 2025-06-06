import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signupUser(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signinUser(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
