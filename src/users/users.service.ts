import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find({
      // ทำหรือไม่ทำก็ได้
      relations: ['settings'],
    });
  }

  async getUserById(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      relations: ['settings'],
    });
  }

  async createUser(createUserInput: CreateUserInput) {
    const newUser = this.userRepository.create(createUserInput);
    return await this.userRepository.save(newUser);
  }
}
