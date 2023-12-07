import React, { useState } from 'react';
import { Navigation } from '../components';

export default function Test() {
  const [error, setError] = useState(false);

  if (error)
    throw new Error(
      'Oh! See! Should have warned you. This page tests the error boundary!'
    );

  return (
    <section>
      <Navigation />
      <div className="link">
        <h1>Bonjour!</h1>
        <button
          onClick={() => {
            setError(true);
          }}
        >
          Clique moi!
        </button>
      </div>
    </section>
  );
}