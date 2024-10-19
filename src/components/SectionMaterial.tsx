// src/components/SectionMaterial.tsx
import React from 'react';

function SectionMaterial({ materials }) {
  return (
    <div style={{ margin: '1rem 0', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Материалы для изучения:</h3>
      <p>{materials}</p>
    </div>
  );
}

export default SectionMaterial;
