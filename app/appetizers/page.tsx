'use client'
import { useRouter } from 'next/navigation'

export default function Appetizers() {  
  const router = useRouter()
    return (
        <div>
            <div id="appetizers">
                <li>Fried Green Tomatoes</li>
                <li>Spinach and Artichoke Dip</li>
                <li>Breadsticks</li>
                <li>Fried Ravioli</li>
                <li>Fried Mac and Cheese Balls</li>
            </div>  
            <button type="button" onClick={() => router.push('/')}>
                Back
            </button>
        </div>  
    );
  }