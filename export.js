const { createClient } = require('@supabase/supabase-js');

const fs = require('fs');

const supabaseUrl = 'https://etjmpgvqczukukhpmcyt.supabase.co'; // Substitua pelo URL do seu Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0am1wZ3ZxY3p1a3VraHBtY3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNTAyMTYsImV4cCI6MjAzNjcyNjIxNn0.CcRJAmqVEupzZ5gjA-UIuw6-FL-6cH0ifTJtInIzMKg'; // Substitua pela sua chave do Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

async function exportData() {
  let { data, error } = await supabase
    .from('CadUsuario') // Substitua pelo nome da sua tabela
    .select('*');

  if (error) {
    console.log('Error:', error);
    return;
  }

  fs.writeFileSync('data.json', JSON.stringify(data, null, 2)); // Salva os dados em um arquivo JSON
}

exportData();
