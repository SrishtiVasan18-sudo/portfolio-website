import { useEffect, useState } from 'react';
export default function useScrollSpy(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    ids.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}
