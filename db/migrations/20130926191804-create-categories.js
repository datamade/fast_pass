var dbm = require('db-migrate');
var type = dbm.dataType;
var tableName = 'categories';

exports.up = function(db, callback) {
  db.createTable(tableName, {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    title: 'string',
    description: 'string',
    code: 'string',
    type: 'string'
  }, function () {
    db.runSql("ALTER table " + tableName + " ADD COLUMN related_parcel_ids integer[]", callback);
  });
};

exports.down = function(db, callback) {
  db.dropTable(tableName, callback);
};
