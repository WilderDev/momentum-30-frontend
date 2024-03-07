// * Function: Validates an email address
export default function isValidEmail(email: string): boolean {
  // A regex that represents the common rules for an email address
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email); // Returns true if the email is valid and false if it is not
}
