angular.module('chihobPhotoShowroom', [])
  .controller('indexController', ['$scope', function ($scope) {
      $scope.siteLastUpdated = "12/31/2016";
      $scope.timelapseViewModel = [
          {
              MediaUrl: "https://www.instagram.com/p/BOqQQn4jUld/",
              MediaLocationDetail: "Pier A Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "12/30/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BOp9URplAmJ/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "12/30/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BOldRqUlWQJ/",
              MediaLocationDetail: "Weehawken Waterfront Recreational Park",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "12/28/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BNizFW3hxX9/",
              MediaLocationDetail: "Lincoln Tunnel",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "12/02/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BNTGj88DbB8/",
              MediaLocationDetail: "Fort Lee Historicl Park",
              MediaLocationCity: "Fort Lee",
              MediaLocationState: "NJ",
              MediaDate: "11/26/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BNLb2aEhRVo/",
              MediaLocationDetail: "40th Street–Lowery Street",
              MediaLocationCity: "Queens",
              MediaLocationState: "NY",
              MediaDate: "11/23/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BMutDi9Dp2f/",
              MediaLocationDetail: "Hamilton Park",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "11/12/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BMkz4xIDs94/",
              MediaLocationDetail: "Frank Sinatra Drive",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "11/08/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BMe3y5BDl9K/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "11/06/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BMP99u7jZfl/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "10/31/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BLm7qGoj9tO/",
              MediaLocationDetail: "Riverview Park",
              MediaLocationCity: "Jersey City",
              MediaLocationState: "NJ",
              MediaDate: "10/15/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BLXHp1vDohS/",
              MediaLocationDetail: "Riverview Park",
              MediaLocationCity: "Jersey City",
              MediaLocationState: "NJ",
              MediaDate: "10/09/2016"
          },          
          {
              MediaUrl: "https://www.instagram.com/p/BLSJf8njm2q/",
              MediaLocationDetail: "Lincoln Tunnel",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "10/07/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BLCyAkrhXnA/",
              MediaLocationDetail: "Lincoln Tunnel",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "10/01/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BK4bN0LBZXN/",
              MediaLocationDetail: "Boulevard East",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "09/27/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BKzIi1UBIr-/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "09/25/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BKw6ueghQBI/",
              MediaLocationDetail: "Boulevard East",
              MediaLocationCity: "West New York",
              MediaLocationState: "NJ",
              MediaDate: "09/24/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BKuKrvMh2mm/",
              MediaLocationDetail: "Lincoln Tunnel",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "09/23/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BKrm4PbBCGn/",
              MediaLocationDetail: "Boulevard East",
              MediaLocationCity: "West New York",
              MediaLocationState: "NJ",
              MediaDate: "09/22/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BKe0LtGBSjx/",
              MediaLocationDetail: "Exchange Place",
              MediaLocationCity: "Jersey City",
              MediaLocationState: "NJ",
              MediaDate: "09/17/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BKcIkIUBMMQ/",
              MediaLocationDetail: "40th Street–Lowery Street",
              MediaLocationCity: "Queens",
              MediaLocationState: "NY",
              MediaDate: "09/16/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BKE6xI0BuFV/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "09/07/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BJ_vJrYhYgX/",
              MediaLocationDetail: "Riverview Park",
              MediaLocationCity: "Jersey City",
              MediaLocationState: "NJ",
              MediaDate: "09/05/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BJ9JWh6hbG7/",
              MediaLocationDetail: "Firefighters Memorial Park",
              MediaLocationCity: "Union City",
              MediaLocationState: "NJ",
              MediaDate: "09/04/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BJ6wmxEhZJ6/",
              MediaLocationDetail: "George Washington Bridge",
              MediaLocationCity: "Fort Lee",
              MediaLocationState: "NJ",
              MediaDate: "09/03/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BJrIW3VB9iE/",
              MediaLocationDetail: "Firefighters Memorial Park",
              MediaLocationCity: "Union City",
              MediaLocationState: "NJ",
              MediaDate: "08/28/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BHJDaDRBbpv/",
              MediaLocationDetail: "Stevens Institute of Technology",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "06/26/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BHGc3AcBk6F/",
              MediaLocationDetail: "Lincoln Tunnel",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "06/25/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BG5qEy_qTeF/",
              MediaLocationDetail: "Hoboken Terminal",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "06/20/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BGk8mfQKTWF/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "06/12/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BGdPiwZqTYJ/",
              MediaLocationDetail: "Rt 495",
              MediaLocationCity: "Union City",
              MediaLocationState: "NJ",
              MediaDate: "06/09/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BGaoPFRqTSW/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "06/08/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BGVj8ZdqTf1/",
              MediaLocationDetail: "Riverview Park",
              MediaLocationCity: "Jersey City",
              MediaLocationState: "NJ",
              MediaDate: "06/06/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BFc3cd2KTUH/",
              MediaLocationDetail: "Lincoln Tunnel",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "05/15/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BFKz4JLKTd-/",
              MediaLocationDetail: "Weehawken Cove",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "05/08/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BE95KfmKTem/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "05/03/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BEZ5Q4BKTXv/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "05/15/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BD_Dx7AKTdt/",
              MediaLocationDetail: "Astoria Park",
              MediaLocationCity: "Queens",
              MediaLocationState: "NY",
              MediaDate: "04/08/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BDwoDcCKTcS/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "04/03/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BDhJpACqTRC/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "03/28/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BDeiS3cKTSD/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "03/27/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BDUZvO-KTYd/",
              MediaLocationDetail: "14th Street Ferry Terminal",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "03/23/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BDKB3r2qTXB/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "03/19/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BDHjx2iqTRD/",
              MediaLocationDetail: "40th Street–Lowery Street",
              MediaLocationCity: "Queens",
              MediaLocationState: "NY",
              MediaDate: "03/18/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BDCNg0LKTQz/",
              MediaLocationDetail: "14th Street Ferry Terminal",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "03/16/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BCoh_tSqTUW/",
              MediaLocationDetail: "Sinatra Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "03/06/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BCWkeMiKTTF/",
              MediaLocationDetail: "Lincoln Tunnel",
              MediaLocationCity: "Weehawken",
              MediaLocationState: "NJ",
              MediaDate: "02/28/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BCCNywqKTR3/",
              MediaLocationDetail: "Battery Park",
              MediaLocationCity: "New York",
              MediaLocationState: "NY",
              MediaDate: "02/20/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BBEaGkDqTUY/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "01/27/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/BAGRbBBKTSX/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "01/03/2016"
          },
          {
              MediaUrl: "https://www.instagram.com/p/_xbilnqTdj/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "12/26/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/_f3232qTRp/",
              MediaLocationDetail: "Brooklyn Bridge Park",
              MediaLocationCity: "Brooklyn",
              MediaLocationState: "NY",
              MediaDate: "12/19/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/_a27kTKTT_/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "12/17/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/-75QvOKTbp/",
              MediaLocationDetail: "Herald Square",
              MediaLocationCity: "New York",
              MediaLocationState: "NY",
              MediaDate: "12/05/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/-iIicdqTZk/",
              MediaLocationDetail: "46th Street-Bliss Street",
              MediaLocationCity: "Queens",
              MediaLocationState: "NY",
              MediaDate: "11/25/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/-aOgdpKTTH/",
              MediaLocationDetail: "Hudson River Park",
              MediaLocationCity: "New York",
              MediaLocationState: "NY",
              MediaDate: "11/22/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/9ut75-KTQH/",
              MediaLocationDetail: "Grand Central Terminal",
              MediaLocationCity: "New York",
              MediaLocationState: "NY",
              MediaDate: "11/05/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/9cgPu4qTR3/",
              MediaLocationDetail: "40th Street–Lowery Street",
              MediaLocationCity: "Queens",
              MediaLocationState: "NY",
              MediaDate: "10/29/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/8KBHiTKTW7/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "09/27/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/7zHAKMqTds/",
              MediaLocationDetail: "46th Street-Bliss Street",
              MediaLocationCity: "Queens",
              MediaLocationState: "NY",
              MediaDate: "09/19/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/7CAB56qTVm/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "08/30/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/6oSyPvqTUT/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "08/20/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/6TybXSqTR2/",
              MediaLocationDetail: "14th Street Ferry Terminal",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "08/12/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/53fbsEKTTf/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "08/02/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/3C_nJZKTaR/",
              MediaLocationDetail: "Pier C Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "05/23/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/3Ag1AiqTZO/",
              MediaLocationDetail: "Maxwell Park",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "05/22/2015"
          },
          {
              MediaUrl: "https://www.instagram.com/p/1J8aNXKTYD/",
              MediaLocationDetail: "14th Street Ferry Terminal",
              MediaLocationCity: "Hoboken",
              MediaLocationState: "NJ",
              MediaDate: "04/06/2015"
          },
      ];

      $scope.allCities = [];
      $scope.filteredCity = "";
      angular.forEach($scope.timelapseViewModel, function (value, key) {
          if ($scope.allCities.indexOf(value.MediaLocationCity) == -1) {
              $scope.allCities.push(value.MediaLocationCity);
          }
      });
  }]);