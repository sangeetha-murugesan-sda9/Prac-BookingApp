// keeping this super simple for the demo - one hardcoded secret, one hardcoded
// demo user. real apps should never do either of these things.
//
// this JWT_SECRET being a hardcoded string literal is CWE-798 (hardcoded
// credentials) - CodeQL's js/hardcoded-credentials query flags this.

// const JWT_SECRET = 'devops-demo-secret-2024'; // commented out for now - reintroduce later for the demo
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = { JWT_SECRET };