'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';



export default async function Entrees() {  
    const router = useRouter()
    const [entrees, setEntrees] = useState("");

    useEffect(() => {
        const res = async() => {
            await fetch('entrees.txt');
        }
        let entrees = res();
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
