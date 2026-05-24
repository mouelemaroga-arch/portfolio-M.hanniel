'use client'
import { useState, FormEvent } from 'react'

interface ContactProps {
  styles: {
    readonly [key: string]: string;
  };
}

export default function Contact({ styles }: ContactProps) { 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const response = await fetch("https://formspree.io/f/xkopeynl", {
      method: "POST",
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      setStatus("Merci ! Votre message a bien été envoyé.");
      setEmail(""); 
      setMessage("");
    } else {
      setStatus("Oups ! Erreur lors de l'envoi.");
    }
  }; // <--- C'était cette accolade qui manquait !

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <input 
        type="email" 
        placeholder="Votre email" 
        required 
        className={styles.formInput} 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <textarea 
        placeholder="Votre message" 
        required 
        className={styles.formTextarea} 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />

      <button 
        type="submit" 
        className={styles.formButton}
        disabled={status === "Envoi en cours..."}
      >
        {status === "Envoi en cours..." ? "..." : "Envoyer"}
      </button>

      {status && (
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#8b96a3ff' }}>
          {status}
        </p>
      )}
    </form>
  );
}