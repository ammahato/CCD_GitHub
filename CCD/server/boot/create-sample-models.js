module.exports = function(app) {
  app.dataSources.CS_DS.automigrate('CoffieShop', function(err) {
    if (err) throw err;
 
    app.models.CoffieShop.create([
      {name: 'Bel Cafe', city: 'Vancouver'},
      {name: 'Three Bees Coffee House', city: 'San Mateo'},
      {name: 'Caffe Artigiano', city: 'Vancouver'},
    ], function(err, coffieShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffieShops);
    });
  });
};