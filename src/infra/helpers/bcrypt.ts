import bcrypt from "bcrypt";

const hash = async (plaintext: string): Promise<string> => {
  return bcrypt.hash(plaintext, 12);
};

const compare = async (plaintext: string, digest: string): Promise<boolean> => {
  return bcrypt.compare(plaintext, digest);
};
export { hash, compare };
