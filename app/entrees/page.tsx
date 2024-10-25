'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';



export default function Entrees() {  
    const router = useRouter()
    const [entrees, setEntrees] = useState("");

    useEffect( () => {
        fetch('entrees.txt')
            .then(response => response.text())
            .then(data => setEntrees(data))
        
    }, []);

    return (
        <div>
            <li>{entrees}</li>
            <button type="button" onClick={() => router.push('/')}>
                Back
            </button>
        </div>  
    );
  }
