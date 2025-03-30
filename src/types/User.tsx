export default interface User {
  id: string;
  username: string;
  email: string;
  phone_number: string;
  fullname: string | null;
  profile_pic: string | null;
}
