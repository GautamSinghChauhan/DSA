const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};

const decrypt = (encrypted) => {
  let iv = Buffer.from(encrypted.iv, 'hex');
  let encryptedText = Buffer.from(encrypted.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

const name = 'John';
const textToEncrypt = 'password123';
const encrypted = encrypt(textToEncrypt);
console.log(`Hello ${name}, your encrypted password is ${encrypted.encryptedData}`);

const decrypted = decrypt(encrypted);
console.log(`Hello ${name}, your decrypted password is ${decrypted}`);
