import { API } from "@/api/request";

export const getUserInfoApi = (account,password) =>{
  return API.get("/api/user",{params:{account:account,password:password}})
}
