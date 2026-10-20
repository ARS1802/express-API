import { createClient } from "@supabase/supabase-js";

class Database {
  constructor() {
    this.sb = this.#istantiate();
    this.loginAttempt = 0;
  }

  async #istantiate() {
    return await createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
    );
  }

  /**
   *
   * @param {*} req -> Router
   * @param {*} res -> Router
   * @returns json of error or user
   */
  async singup(req, res) {
    try {
      const { data, error } = await this.sb.auth.signUp({
        email,
        password,
      });

      return error
        ? res.status(400).json({ SupabaseError: error.message })
        : res
            .status(201)
            .send({ greetings: "Hello new user!", user: data.user });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ Error: error.message });
    }
  }

  async login(req, res) {
    if (this.loginAttempt > 3) {
      return res
        .status(401)
        .json({ denied: "Too many attempts... reboot or get out!" });
    }

    try {
      this.loginAttempt += 1;
      const { data, error } = await this.sb.auth.singInWithPassword({
        email,
        password,
      });

      return error
        ? res.status(400).json({ Error: error.message })
        : res
            .status(202)
            .json({ greetings: "Welcome back user!", user: data.user });
    } catch (error) {
      console.error(error);
    }
  }
}

const sb = new Database();
Object.freeze(sb);
export default sb;
