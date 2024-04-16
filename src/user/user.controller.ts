import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly expenseService: UserService) {}

  @Post()
  async createExpense(@Body() data: UserDto, @Res() response: any) {
    const user = await this.expenseService.createUser(data);

    return response.status(201).json({
      message: 'success',
      showMessage: 'Our team will get back to you shortly',
      data: user,
    });
  }
  @Get()
  async getExpenses(@Res() response: any) {
    const expenses = await this.expenseService.getUsers();
    return response.status(200).json({
      message: 'success',
      data: expenses,
    });
  }
}
