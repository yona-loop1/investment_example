import { Static, Type } from '@sinclair/typebox';
import Ajv from 'ajv';


export const registeringSchema = Type.Object({
    idNumber: Type.String({minLength: 9, maxLength: 9}),
    firstName: Type.String({minLength: 2}),
    lastName: Type.String({minLength: 2}),
    phone: Type.String(),
    email: Type.String({ format: "email"}),
    password: Type.String({minLength: 8, maxLength: 12}),
});

export const loginSchema = Type.Object({
    idNumber: Type.String({minLength: 9, maxLength: 9}),
    password: Type.String({minLength: 8, maxLength: 12})
});

export const userDataForInvestmentSchema = Type.Object({
    id: Type.String({minLength: 9, maxLength: 9}),
    age: Type.Integer({minimum: 18, maximum: 80}),
    money: Type.Number({minimum: 20000}),
    lengthInvestment: Type.String({ enum: ["shortest", "short", "medium", "length", "lengthiest"]})
});

export const updateCustomerDetails = Type.Object({
    idNumber: Type.String({minLength: 9, maxLength: 9}),
    firstName: Type.String({minLength: 2}),
    lastName: Type.String({minLength: 2}),
    phone: Type.String(),
    email: Type.String({ format: "email"}),
});

export const updatePasswordSchema = Type.Object({
    idNumber: Type.String({minLength: 9, maxLength: 9}),
    oldPassword: Type.String({minLength: 8, maxLength: 12}),
    newPassword: Type.String({minLength: 8, maxLength: 12})
});

const ajv = new Ajv();
const csvSchema = {
    type: "object",
    properties: {
        idNumber: { type: "string"}, 
        firstName: { type: "string"},
        lastName:{ type: "string"}, 
        phone: { type: "string"}, 
        email: { type: "string"},
    },
    required: ["idNumber", "firstName", "lastName", "phone", "email"],
    additionalProperties: false
};
export const validateCsvSchema = ajv.compile(csvSchema);


export type registeringSchemaType = Static<typeof registeringSchema>;
export type loginSchemaType = Static<typeof loginSchema>;
export type userDataForInvestmentSchemaType = Static<typeof userDataForInvestmentSchema>;
export type updatePasswordSchemaType = Static<typeof updatePasswordSchema>;
export type updateCustomerDetailsType = Static<typeof updateCustomerDetails>;