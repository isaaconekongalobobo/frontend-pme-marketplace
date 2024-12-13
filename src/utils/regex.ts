// Regex pour le numero de telephone
export const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{2,4}[-.\s]?){2,4}$/

// Regex pour le mot de passe
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;