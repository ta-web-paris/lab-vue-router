api.getAll()
  .then((value) => {
    console.log("api.getAll() value: ", value);
  });

api.getOne()
  .then((value) => {
    console.log("api.getOne() value: ", value);
  });

api.addOne()
  .then((value) => {
    console.log("api.addOne() value: ", value);
  });

api.editOne()
  .then((value) => {
    console.log("api.editOne() value: ", value);
  });

api.deleteOne()
  .then((value) => {
    console.log("api.deleteOne() value: ", value);
  });
