import { createClient } from "@supabase/supabase-js";

const sb = await createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);
Object.freeze(sb);
export default sb;
