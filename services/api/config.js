
// this JWT_SECRET being a hardcoded string literal is CWE-798 (hardcoded
// credentials) - CodeQL's js/hardcoded-credentials query flags this.

const JWT_SECRET = 'devops-demo-secret-2024'; 
//const JWT_SECRET = process.env.JWT_SECRET;

//module.exports = { JWT_SECRET };