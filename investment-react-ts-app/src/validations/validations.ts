
type Patterns = "email" | "number" | "password";

const regex = {
    number: /^\d+$/,
    email: /^[\w.-]+@([\w-]+\.)+[\w-]{2,5}$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
};

const message = {
    number: "יש להזין מספרים בלבד",
    email: "כתובת האימייל אינה חוקית",
    password: "סיסמה אינה תקינה יש להזין: אות קטנה, אות גדולה, תו כלשהו, ומספר, מופע אחד לפחות מכל אחד מאלו"
};

const validation = (pattern: Patterns, input: string): string | null => {
    let specificMessage = null
    const regexString = regex[pattern]
    const auth = regexString.test(input)
    if (!auth) {
        specificMessage = message[pattern]
    };
    return specificMessage
};

const validationNumber = (pattern: Patterns, input: string): boolean => {
    const auth = validation(pattern, input)
    if (auth) {
        return false
    } else {
        return true
    };
};

export { validation, validationNumber };