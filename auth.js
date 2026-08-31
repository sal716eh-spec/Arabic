/* auth.js — shared login/logout/guard for every page.
   Loaded on each page via:
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
     <script src="auth.js?v=1"></script>
   Safe public values only. The publishable key is meant to be public. */

const SUPABASE_URL = 'https://gaajfahtrbdybjuunfhe.supabase.co';
const SUPABASE_KEY = 'sb_publishable_nFs-UJyKpTsCtHRn4WZJGg_c14-cM4e';

// create one shared client the whole page can use
const sb = (window.supabase && window.supabase.createClient)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

/* Log the user out: end the Supabase session, clear the cached name,
   then send them to the login page. Works from any page. */
async function logout(){
  try { if (sb) await sb.auth.signOut(); } catch(_) {}
  try { localStorage.removeItem('bay_name'); } catch(_) {}
  window.location.href = 'index.html';
}

/* Guard a page: if nobody is logged in, bounce to the login page.
   Call this near the top of a protected page. Returns the session (or null). */
async function requireLogin(){
  if (!sb) return null;                       // library failed to load; don't lock people out
  try {
    const { data } = await sb.auth.getSession();
    if (!data || !data.session) {
      window.location.href = 'index.html';
      return null;
    }
    return data.session;
  } catch(_) {
    return null;                              // on error, fail open rather than trap the user
  }
}

// let any "Log out" link work just by adding onclick="logout()" OR class="logout-link"
document.addEventListener('click', function(e){
  const t = e.target.closest('.logout-link, [data-logout]');
  if (t){ e.preventDefault(); logout(); }
});
