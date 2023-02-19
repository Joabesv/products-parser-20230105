import { schedule } from 'node-cron';

export async function seedDatabase() {
  // eslint-disable-next-line
  const job = schedule('0 5 0 0 0', async () => {
    // por aqui a logica de inserir no banco
    // limitar o insert a 100 produtos por arquivo da resposta
    // tem que ter `imported_t` e `status`
  });
}
