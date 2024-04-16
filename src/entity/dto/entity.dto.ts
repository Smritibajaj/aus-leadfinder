import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GSTDTO {
  @IsOptional()
  status: string;
  @IsOptional()
  GSTStatusFromDate: Date;
}

export class AddressDTO {
  @IsOptional()
  street: string;
  @IsOptional()
  city: string;
  @IsOptional()
  state: string;
  @IsOptional()
  postcode: string;
}

export class EntityDTO {
  @IsNotEmpty()
  @IsString()
  ABN: string;
  @IsOptional()
  ABNStatus: string;
  @IsOptional()
  ABNStatusFromDate: Date;
  @IsOptional()
  EntityTypeInd: string;
  @IsOptional()
  EntityTypeText: string;
  @IsOptional()
  NonIndividualNameText?: any;
  @IsNotEmpty()
  @IsString()
  GivenName: string;
  @IsNotEmpty()
  @IsString()
  FamilyName: string;
  @IsOptional()
  BusinessAddress?: AddressDTO;
  @IsOptional()
  GST?: GSTDTO;
}
