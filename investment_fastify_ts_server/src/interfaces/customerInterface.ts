//import { RouteGenericInterface } from "fastify/types/route";

export interface Registering {
    idNumber: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: string
};

export interface GetMetaCustomer {
    id: string;
};