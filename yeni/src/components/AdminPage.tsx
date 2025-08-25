import { useState } from 'react';
import { useContent } from '../content/ContentProvider.tsx';
import AdminSlideEditor from './admin/AdminSlideEditor'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { slidesTr, slidesEn, setSlidesTr, setSlidesEn, save } = useContent();

  const handleLogin = () => {
    if (email === 'admin@orwen.com' && password === 'Letsmakemillions!') {
      setAuthenticated(true);
      setError(null);
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSave = async () => {
    await save();
    alert('Saved.');
  };

  const syncTrToEn = () => {
    setSlidesEn(JSON.parse(JSON.stringify(slidesTr)))
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-night text-porcelain p-6">
        <h1 className="text-2xl mb-4">Admin Login</h1>
        {error ? <div className="mb-3 text-red-400 text-sm">{error}</div> : null}
        <div className="mb-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-sm rounded-md bg-white/10 border border-white/20 p-2 outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full max-w-sm rounded-md bg-white/10 border border-white/20 p-2 outline-none"
          />
        </div>
        <button onClick={handleLogin} className="rounded-md bg-mint/20 border border-mint/30 px-4 py-2">Login</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-night text-porcelain p-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl">Admin Panel</h1>
        <div className="flex items-center gap-2">
          <button onClick={syncTrToEn} className="rounded-md bg-white/10 border border-white/20 px-4 py-2">Sync TR → EN</button>
          <button onClick={() => navigate('/')} className="rounded-md bg-white/10 border border-white/20 px-4 py-2">Preview</button>
          <button onClick={handleSave} className="rounded-md bg-mint/20 border border-mint/30 px-4 py-2">Save All</button>
        </div>
      </div>
      <p className="text-sm text-porcelain/80 mt-2 mb-4">Edit content inline. Use the Edit button next to each field. Save All to persist.</p>

      <div className="mt-6 grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-lg font-semibold mb-3">Slides (TR)</h2>
          <div className="space-y-4">
            {slidesTr.map((s, idx) => (
              <AdminSlideEditor
                key={s.id}
                slide={s}
                onChange={(next) => {
                  const copy = [...slidesTr]
                  copy[idx] = next
                  setSlidesTr(copy)
                }}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Slides (EN)</h2>
          <div className="space-y-4">
            {slidesEn.map((s, idx) => (
              <AdminSlideEditor
                key={s.id}
                slide={s}
                onChange={(next) => {
                  const copy = [...slidesEn]
                  copy[idx] = next
                  setSlidesEn(copy)
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;