import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserSettingsInput } from './dto/create-user_setting';
import { UserSetting } from './entities/user_setting.entitie';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUserSettingById(userId: number) {
    return this.userSettingsRepository.findOneBy({ userId });
  }

  async createUserSettings(createUserSettingsInput: CreateUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingsInput.userId,
    });
    if (!findUser) throw new Error('User not found');
    const userSetting = this.userSettingsRepository.create(
      createUserSettingsInput,
    );
    const saveSetting = await this.userSettingsRepository.save(userSetting);
    findUser.settings = saveSetting;
    await this.userRepository.save(findUser);
    return saveSetting;
  }
}
