import { RoleModel } from 'tools/models/role.model';
import { GroupModel } from 'tools/models/group.model';
import { IsNotEmpty,Length,IsEmail, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsNotEmpty()
  @Length(2,20)
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  password: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsDateString()
  @ApiProperty()
  birthDay: Date;
}

// tslint:disable-next-line:max-classes-per-file
export class UserUpdateDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  birthDay: Date;
  @ApiProperty()
  roles: RoleModel[];
  @ApiProperty()
  groups: GroupModel[];
}

// tslint:disable-next-line:max-classes-per-file
export class UserLoginDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
