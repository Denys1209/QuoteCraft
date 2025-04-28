// import { AxiosError, AxiosResponse } from "axios";
// import { z } from "zod";



// import Service from "./shared/Service";
// import { FilterPaginationDto, filterPaginationDtoSchema } from "@/appDtos/Shared/filter-pagination-dto";
// import { ReturnPageDto } from "@/appDtos/Shared/return-page-dto";
// import { GetLightUserDto } from "@/appDtos/Dtos/Text";

// class UserService extends Service {
//   public constructor() {
//     super("User/");
//   }

//   async getAllUsers(
//     paginationDto: FilterPaginationDto
//   ): Promise<AxiosResponse<ReturnPageDto<GetLightUserDto>>> {
//     filterPaginationDtoSchema.parse(paginationDto);

//     return this.axiosInstance.get("", { params: paginationDto });
//   }

//   async getUserById(id: string): Promise<AxiosResponse<GetLightUserDto>> {
//     z.string().uuid().parse(id);

//     return this.axiosInstance.get(`${id}`);
//   }

//   async registerUserWithEmail(
//     model: UserReg
//   ): Promise<AxiosResponse> {
//     try {
//       userRegistrationDtoSchema.parse(model);

//       return await this.axiosInstance.post("registrationWithEmail", model);
//     } catch (error) {
//       const axiosError = error as AxiosError;

//       if (axiosError.response) {
//         // The client was given an error response (5xx, 4xx)
//         if (axiosError.response.status === 404) {
//           // Handle 404 error specifically
//           throw new Error(
//             `Resource not found. Please check the URL "${(axiosError.request as XMLHttpRequest).responseURL}".`
//           );
//         }
//       } else if (axiosError.request) {
//         // The client never received a response, or the request was never left
//         console.log("Request was made but no response was received.");
//       } else {
//         // Anything else
//         console.log("An error occurred:", axiosError.message);
//       }
//       throw axiosError;
//     }
//   }

//   async registerUser(model: UserRegistrationDto): Promise<AxiosResponse> {
//     try {
//       userRegistrationDtoSchema.parse(model);

//       return await this.axiosInstance.post("registration", model);
//     } catch (error) {
//       const axiosError = error as AxiosError;

//       if (axiosError.response) {
//         // The client was given an error response (5xx, 4xx)
//         if (axiosError.response.status === 404) {
//           // Handle 404 error specifically
//           throw new Error(
//             `Resource not found. Please check the URL "${(axiosError.request as XMLHttpRequest).responseURL}".`
//           );
//         }
//       } else if (axiosError.request) {
//         // The client never received a response, or the request was never left
//         console.log("Request was made but no response was received.");
//       } else {
//         // Anything else
//         console.log("An error occurred:", axiosError.message);
//       }
//       throw axiosError;
//     }
//   }

//   async verifyUser(email: string, token: string): Promise<AxiosResponse> {
//     return this.axiosInstance.post("verify", { email, token });
//   }

//   async forgotPassword(email: string): Promise<AxiosResponse> {
//     return this.axiosInstance.post("forgot-password", { email });
//   }

//   async resetPassword(request: any): Promise<AxiosResponse> {
//     return this.axiosInstance.post("reset-password", request);
//   }

//   async deleteUser(id: string): Promise<AxiosResponse> {
//     z.string().uuid().parse(id);

//     return this.axiosInstance.delete(`${id}`);
//   }

//   async loginUser(
//     model: UserLoginDto
//   ): Promise<AxiosResponse<LoginResponseUserDto>> {
//     userLoginDtoSchema.parse(model);

//     return this.axiosInstance.post("login", model);
//   }

//   async update(dto: UpdateUserDto): Promise<void> {
//     await this.axiosInstance.put("", updateUserDtoSchema.parse(dto));
//   }
// }

// export default new UserService();
