import grpc from 'grpc';
import dgraph from 'dgraph-orm';

dgraph.connect({
  host: 'localhost',
  port: 9080,
  credentails: grpc.credentials.createInsecure(),
  debug: false
});

dgraph.logging(console.log);

// const PeopleSchema = new dgraph.Schema('people', {
//   name: {
//     type: dgraph.Types.STRING
//   },
//   knows: {
//     type: dgraph.Types.UID,
//     model: 'people'
//   }
// });

// const People = dgraph.model(PeopleSchema);

(async () => {
  // const bob = await People.create({
  //   name: 'Bob'
  // });

  // console.log(bob);

  // const alice = await People.create({
  //   name: 'Alice',
  //   knows: '0x1'
  // });

  // console.log(alice);

  // const peoples = await People.uid('0x2', {
  //   include: {
  //     knows: {
  //       as: 'knows'
  //     }
  //   }
  // });

  // console.log(peoples);
})();
