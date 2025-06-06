import { useEffect, useState } from 'react';
import axios from 'axios';

const Terms = () => {
  const [terms, setTerms] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/terms').then((res) => {
      setTerms(res.data);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">{terms.section1Title}</h1>
      <p className="mb-8 whitespace-pre-line">{terms.section1Content}</p>
      <h2 className="text-2xl font-semibold mb-4">{terms.section2Title}</h2>
      <p className="whitespace-pre-line">{terms.section2Content}</p>
    </div>
  );
};

export default Terms;
