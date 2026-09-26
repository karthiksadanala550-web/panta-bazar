const SUPABASE_URL = "https://ltpgvpzemwldypzjfzio.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_AC28dMWotEdX_tnZVeRhbQ_rH3-ffr9";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("Farmer2Retail Supabase connected");