import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserSettingsInput } from './dto/create-user_setting';
import { UserSetting } from './entities/user_setting.entitie';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
  ) {}

  getUserSettingById(userId: number) {
    return this.userSettingsRepository.findOneBy({ userId });
  }

  createUserSettings(createUserSettingsInput: CreateUserSettingsInput) {
    const userSetting = this.userSettingsRepository.create(
      createUserSettingsInput,
    );
    return this.userSettingsRepository.save(userSetting);
  }
}
