'use client';
import React, { useState } from 'react';
import { JsonData } from '../types/JsonTypes';

const JsonFormatter: React.FC = () => {
  const [rawJson, setRawJson] = useState<string>('');
  const [formattedJson, setFormattedJson] = useState<string>('');
  const [jsonError, setJsonError] = useState<string>('');

  const formatJson = () => {
    try {
      const parsedJson = JSON.parse(rawJson);
      const formatted = JSON.stringify(parsedJson, null, 2);
      setFormattedJson(formatted);
      setJsonError('');
    } catch (error) {
      setJsonError('JSON inválido. Verifique a sintaxe.');
      setFormattedJson('');
    }
  };

  const prettifyJson = () => {
    try {
      const parsedJson = JSON.parse(rawJson);
      const prettified = JSON.stringify(
        parsedJson, 
        (key, value) => {
          if (typeof value === 'string') {
            return value.toUpperCase();
          }
          return value;
        }, 
        2
      );
      setFormattedJson(prettified);
      setJsonError('');
    } catch (error) {
      setJsonError('JSON inválido. Verifique a sintaxe.');
    }
  };

  const minifyJson = () => {
    try {
      const parsedJson = JSON.parse(rawJson);
      const minified = JSON.stringify(parsedJson);
      setFormattedJson(minified);
      setJsonError('');
    } catch (error) {
      setJsonError('JSON inválido. Verifique a sintaxe.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Formatador de JSON</h1>
      
      <textarea 
        value={rawJson}
        onChange={(e) => setRawJson(e.target.value)}
        placeholder="Cole seu JSON aqui"
        className="w-full h-40 p-2 border rounded mb-4"
      />
      
      <div className="flex space-x-2 mb-4">
        <button 
          onClick={formatJson} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Formatar
        </button>
        <button 
          onClick={prettifyJson} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Embelezar
        </button>
        <button 
          onClick={minifyJson} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Minimizar
        </button>
      </div>
      
      {jsonError && (
        <div className="text-red-500 mb-4">{jsonError}</div>
      )}
      
      {formattedJson && (
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {formattedJson}
        </pre>
      )}
    </div>
  );
};

export default JsonFormatter;