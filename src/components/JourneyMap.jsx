'use client';

import dynamic from 'next/dynamic';

const JourneyMapClient = dynamic(() => import('./JourneyMapClient'), {
  ssr: false,
  loading: () => <div className="map-loading-placeholder">Memuat peta...</div>
});

export default function JourneyMap() {
  return <JourneyMapClient />;
}
