export class CreateContactListDto {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  mobileNumber: string;
  email: string;
}

export class FilterCriteriaDto {
  firstName?: string;
  lastName?: string;
  email?: string;
}
