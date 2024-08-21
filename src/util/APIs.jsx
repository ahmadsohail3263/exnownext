import { create } from "./Crud/Operations";

const BaseURl = "api/v1/";

export const APIs = {
  Users: `${BaseURl}users/register`,
  Login: `${BaseURl}login/access-token`
};
