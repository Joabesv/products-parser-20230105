import { app } from './app';

app.get('/', async (request, reply) => {
  await reply.status(200).send({
    msg: 'This is a challenge by coodesh!'
  })
})

app.listen({ port: 5000 })
.then(() => {
  console.log('pai ta de pé');
});
