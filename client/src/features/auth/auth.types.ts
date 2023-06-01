export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  phone_number: string;
  gender: string;
  country: string;
  city: string;
  profile_photo: {
    small: string;
    medium: string;
    large: string;
  };
};

export type ActivateFormData = {
  uid: string;
  token: string;
};
