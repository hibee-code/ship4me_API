import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class AdminUserSignUpDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters,
      at least one uppercase letter,
      one lowercase letter,
      one number and
      one special character`,
  })
  password: string;
}

export class AdminUserSignInDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters,
      at least one uppercase letter,
      one lowercase letter,
      one number and
      one special character`,
  })
  password: string;

  // @IsNotEmpty()
  // @IsBoolean()
  // mfaEnabled: boolean;
}
