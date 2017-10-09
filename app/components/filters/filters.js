angular.
  module('explorer')
  .filter('carPlate', function () {
            return function (input) {
                var str = input + '';
                str = str.replace(/^([A-Z]{3})([0-9]{4}$)/, "$1-$2");
                return str;
            };
        })
  .filter('cep', function () {
      return function (input) {
          var str = input + '';
          str = str.replace(/\D/g, '');
          str = str.replace(/^(\d{2})(\d{3})(\d)/, "$1.$2-$3");
          return str;
      };
  })
  .filter('tel', function () {
      return function (input) {
          var str = input + '';
          str = str.replace(/\D/g, '');
          if (str.length === 11) {
              str = str.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
          } else {
              str = str.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
          }
          return str;
      };

  });
