var figo = require ('figo');


// Demo client
var client_id     = 'CaESKmC8MAhNpDe5rvmWnSkRE_7pkkVIIgMwclgzGcQY'; // Demo client ID
var client_secret = 'STdzfv0GXtEj_bwYn7AgCVszN1kKq5BdgEIKOM_fzybQ'; // Demo client secret

var connection = new figo.Connection(client_id, client_secret);

var access_token = 'ASHWLIkouP2O6_bgA2wWReRhletgWKHYjLqDaqb0LFfamim9RjexTo22ujRIP_cjLiRiSyQXyt2kM1eXU2XLFZQ0Hro15HikJQT_eNeT_9XQ';
// var access_token = '';
//
// var username = 'demo@figo.me';
// var password = 'demo1234';
//
// connection.credential_login(username, password, null, null, null, null, function(error, token) {
//   if (error) {
//     console.error(error);
//   } else {
//     access_token = token.access_token;
//   }
// });

var session = new figo.Session(access_token);

session.get_transactions(null, function(error, transactions) {
  if (error) {
    console.error(error);
  } else {
    transactions.forEach(function(transaction) {
      // Do whatever you want
      console.log(transaction.transaction_id + ' ' + transaction.account_number + ' ' +
       transaction.name + ' ' + transaction.booking_date + ' ' + transaction.type + ' ' +
       transaction.booking_text + ' ' + transaction.amount + ' ' + transaction.currency);
    });
  }
});
