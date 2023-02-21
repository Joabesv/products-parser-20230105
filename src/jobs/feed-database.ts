import { schedule } from 'node-cron';
import responseMock from '../../products.json';
import { knex } from '../database/connection';

export async function seedDatabase() {
  const job = schedule('* * * * *', async () => {
    try {
      const mockedProduct = await knex.transaction(async (trx) => {
        const multipleInsert = await trx('products').insert(responseMock);
        console.log('multiple insert worked', multipleInsert.length);
      });
      return mockedProduct;
    } catch (e) {
      console.log('erro', e);
    }
    // por aqui a logica de inserir no banco
    // limitar o insert a 100 produtos por arquivo da resposta
    // tem que ter `imported_t` e `status`
    // console.log('estrutura', responseMock);
    // for (const [value, index] of responseMock) {
    //   console.log('to aqui', value);
    //   // knex.insert()
    // }
    console.log('dentro do job');
  });
  return job;
}
