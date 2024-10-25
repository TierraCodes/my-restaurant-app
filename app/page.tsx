'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <button type="button" onClick={() => router.push('/appetizers')}>
        Appetizers
      </button>
      <p></p>
      <button type="button" onClick={() => router.push('/entrees')}>
        Entrees
      </button>
    </div>
  );
}
