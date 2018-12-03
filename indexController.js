angular.module('chihobPhotoShowroom', [])
	.controller('indexController', ['$scope', function ($scope) {
		_.merge($scope, {
			appTitle: "chihoboken - Photo Gallery",
			siteLastUpdated: "06/03/2018",
			showAllInstagramMedia: true, // false For Debug
			pictureList: [],
			allCities: [],
			
			allViews: [
				{key: "tl", value: "Timelapse"},
				{key: "fw", value: "Fireworks"},
				{key: "sr", value: "Sunrise"},
			],
			selectedView: "sr",
			
			//filteredCity: ""
		});
		
		var photosAndVideos = {
			tl: [
				{
				  mediaUrl: "https://www.instagram.com/p/BfM_4GYgikJ/",
				  mediaLocationDetail: "Waterfront Park and Recreation Center",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "02/14/2018",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/Bd6pLoIAaCv/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "01/13/2018",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BZz9LqTA6kv/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "10/03/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BY2JDRjAfbj/",
				  mediaLocationDetail: "Pier C Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "09/09/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BWJjIAegswK/",
				  mediaLocationDetail: "Weehawken Cove",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "07/04/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BVyZdQsgTKR/",
				  mediaLocationDetail: "Sheraton Lincoln Harbor",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "06/25/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BUF4UyFg8Cw/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "05/14/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BSz3cJagfrM/",
				  mediaLocationDetail: "14th Street Ferry Terminal",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "04/12/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BSXdaThAr-C/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "04/01/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BSFX6wBgKY1/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "03/25/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BQb3Eqrl0uS/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "02/12/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BPwOH5jFMa4/",
				  mediaLocationDetail: "Boulevard East",
				  mediaLocationCity: "West New York",
				  mediaLocationState: "NJ",
				  mediaDate: "01/26/2017",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BOqQQn4jUld/",
				  mediaLocationDetail: "Pier A Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "12/30/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BOp9URplAmJ/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "12/30/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BOldRqUlWQJ/",
				  mediaLocationDetail: "Weehawken Waterfront Recreational Park",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "12/28/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BNizFW3hxX9/",
				  mediaLocationDetail: "Lincoln Tunnel",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "12/02/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BNTGj88DbB8/",
				  mediaLocationDetail: "Fort Lee Historicl Park",
				  mediaLocationCity: "Fort Lee",
				  mediaLocationState: "NJ",
				  mediaDate: "11/26/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BNLb2aEhRVo/",
				  mediaLocationDetail: "40th Street–Lowery Street",
				  mediaLocationCity: "Queens",
				  mediaLocationState: "NY",
				  mediaDate: "11/23/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BMutDi9Dp2f/",
				  mediaLocationDetail: "Hamilton Park",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "11/12/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BMkz4xIDs94/",
				  mediaLocationDetail: "Frank Sinatra Drive",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "11/08/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BMe3y5BDl9K/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "11/06/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BMP99u7jZfl/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "10/31/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BLm7qGoj9tO/",
				  mediaLocationDetail: "Riverview Park",
				  mediaLocationCity: "Jersey City",
				  mediaLocationState: "NJ",
				  mediaDate: "10/15/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BLXHp1vDohS/",
				  mediaLocationDetail: "Riverview Park",
				  mediaLocationCity: "Jersey City",
				  mediaLocationState: "NJ",
				  mediaDate: "10/09/2016",
				  showBlock: true,
				  showMedia: true
				},          
				{
				  mediaUrl: "https://www.instagram.com/p/BLSJf8njm2q/",
				  mediaLocationDetail: "Lincoln Tunnel",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "10/07/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BLCyAkrhXnA/",
				  mediaLocationDetail: "Lincoln Tunnel",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "10/01/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BK4bN0LBZXN/",
				  mediaLocationDetail: "Boulevard East",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "09/27/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BKzIi1UBIr-/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "09/25/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BKw6ueghQBI/",
				  mediaLocationDetail: "Boulevard East",
				  mediaLocationCity: "West New York",
				  mediaLocationState: "NJ",
				  mediaDate: "09/24/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BKuKrvMh2mm/",
				  mediaLocationDetail: "Lincoln Tunnel",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "09/23/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BKrm4PbBCGn/",
				  mediaLocationDetail: "Boulevard East",
				  mediaLocationCity: "West New York",
				  mediaLocationState: "NJ",
				  mediaDate: "09/22/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BKe0LtGBSjx/",
				  mediaLocationDetail: "Exchange Place",
				  mediaLocationCity: "Jersey City",
				  mediaLocationState: "NJ",
				  mediaDate: "09/17/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BKcIkIUBMMQ/",
				  mediaLocationDetail: "40th Street–Lowery Street",
				  mediaLocationCity: "Queens",
				  mediaLocationState: "NY",
				  mediaDate: "09/16/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BKE6xI0BuFV/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "09/07/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BJ_vJrYhYgX/",
				  mediaLocationDetail: "Riverview Park",
				  mediaLocationCity: "Jersey City",
				  mediaLocationState: "NJ",
				  mediaDate: "09/05/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BJ9JWh6hbG7/",
				  mediaLocationDetail: "Firefighters Memorial Park",
				  mediaLocationCity: "Union City",
				  mediaLocationState: "NJ",
				  mediaDate: "09/04/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BJ6wmxEhZJ6/",
				  mediaLocationDetail: "George Washington Bridge",
				  mediaLocationCity: "Fort Lee",
				  mediaLocationState: "NJ",
				  mediaDate: "09/03/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BJrIW3VB9iE/",
				  mediaLocationDetail: "Firefighters Memorial Park",
				  mediaLocationCity: "Union City",
				  mediaLocationState: "NJ",
				  mediaDate: "08/28/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BHJDaDRBbpv/",
				  mediaLocationDetail: "Stevens Institute of Technology",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "06/26/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BHGc3AcBk6F/",
				  mediaLocationDetail: "Lincoln Tunnel",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "06/25/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BG5qEy_qTeF/",
				  mediaLocationDetail: "Hoboken Terminal",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "06/20/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BGk8mfQKTWF/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "06/12/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BGdPiwZqTYJ/",
				  mediaLocationDetail: "Rt 495",
				  mediaLocationCity: "Union City",
				  mediaLocationState: "NJ",
				  mediaDate: "06/09/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BGaoPFRqTSW/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "06/08/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BGVj8ZdqTf1/",
				  mediaLocationDetail: "Riverview Park",
				  mediaLocationCity: "Jersey City",
				  mediaLocationState: "NJ",
				  mediaDate: "06/06/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BFc3cd2KTUH/",
				  mediaLocationDetail: "Lincoln Tunnel",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "05/15/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BFKz4JLKTd-/",
				  mediaLocationDetail: "Weehawken Cove",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "05/08/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BE95KfmKTem/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "05/03/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BEZ5Q4BKTXv/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "05/15/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BD_Dx7AKTdt/",
				  mediaLocationDetail: "Astoria Park",
				  mediaLocationCity: "Queens",
				  mediaLocationState: "NY",
				  mediaDate: "04/08/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BDwoDcCKTcS/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "04/03/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BDhJpACqTRC/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "03/28/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BDeiS3cKTSD/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "03/27/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BDUZvO-KTYd/",
				  mediaLocationDetail: "14th Street Ferry Terminal",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "03/23/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BDKB3r2qTXB/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "03/19/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BDHjx2iqTRD/",
				  mediaLocationDetail: "40th Street–Lowery Street",
				  mediaLocationCity: "Queens",
				  mediaLocationState: "NY",
				  mediaDate: "03/18/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BDCNg0LKTQz/",
				  mediaLocationDetail: "14th Street Ferry Terminal",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "03/16/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BCoh_tSqTUW/",
				  mediaLocationDetail: "Sinatra Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "03/06/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BCWkeMiKTTF/",
				  mediaLocationDetail: "Lincoln Tunnel",
				  mediaLocationCity: "Weehawken",
				  mediaLocationState: "NJ",
				  mediaDate: "02/28/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BCCNywqKTR3/",
				  mediaLocationDetail: "Battery Park",
				  mediaLocationCity: "New York",
				  mediaLocationState: "NY",
				  mediaDate: "02/20/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BBEaGkDqTUY/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "01/27/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/BAGRbBBKTSX/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "01/03/2016",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/_xbilnqTdj/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "12/26/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/_f3232qTRp/",
				  mediaLocationDetail: "Brooklyn Bridge Park",
				  mediaLocationCity: "Brooklyn",
				  mediaLocationState: "NY",
				  mediaDate: "12/19/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/_a27kTKTT_/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "12/17/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/-75QvOKTbp/",
				  mediaLocationDetail: "Herald Square",
				  mediaLocationCity: "New York",
				  mediaLocationState: "NY",
				  mediaDate: "12/05/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/-iIicdqTZk/",
				  mediaLocationDetail: "46th Street-Bliss Street",
				  mediaLocationCity: "Queens",
				  mediaLocationState: "NY",
				  mediaDate: "11/25/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/-aOgdpKTTH/",
				  mediaLocationDetail: "Hudson River Park",
				  mediaLocationCity: "New York",
				  mediaLocationState: "NY",
				  mediaDate: "11/22/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/9ut75-KTQH/",
				  mediaLocationDetail: "Grand Central Terminal",
				  mediaLocationCity: "New York",
				  mediaLocationState: "NY",
				  mediaDate: "11/05/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/9cgPu4qTR3/",
				  mediaLocationDetail: "40th Street–Lowery Street",
				  mediaLocationCity: "Queens",
				  mediaLocationState: "NY",
				  mediaDate: "10/29/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/8KBHiTKTW7/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "09/27/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/7zHAKMqTds/",
				  mediaLocationDetail: "46th Street-Bliss Street",
				  mediaLocationCity: "Queens",
				  mediaLocationState: "NY",
				  mediaDate: "09/19/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/7CAB56qTVm/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "08/30/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/6oSyPvqTUT/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "08/20/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/6TybXSqTR2/",
				  mediaLocationDetail: "14th Street Ferry Terminal",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "08/12/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/53fbsEKTTf/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "08/02/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/3C_nJZKTaR/",
				  mediaLocationDetail: "Pier C Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "05/23/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/3Ag1AiqTZO/",
				  mediaLocationDetail: "Maxwell Park",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "05/22/2015",
				  showBlock: true,
				  showMedia: true
				},
				{
				  mediaUrl: "https://www.instagram.com/p/1J8aNXKTYD/",
				  mediaLocationDetail: "14th Street Ferry Terminal",
				  mediaLocationCity: "Hoboken",
				  mediaLocationState: "NJ",
				  mediaDate: "04/06/2015",
				  showBlock: true,
				  showMedia: true
				},
			],
			fw: [
				{
					mediaUrl: "https://www.instagram.com/p/BjJV8c5BYtB/",
					mediaLocationDetail: "Hamilton Park",
					mediaLocationCity: "Weehawken",
					mediaLocationState: "NJ",
					mediaDate: "05/23/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bi5woK2B6-F/",
					mediaLocationDetail: "Frank Sinatra Drive",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "05/17/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BfNEeR1gnGu/",
					mediaLocationDetail: "Waterfront Park and Recreation Center",
					mediaLocationCity: "Weehawken",
					mediaLocationState: "NJ",
					mediaDate: "02/14/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BfM_4GYgikJ/",
					mediaLocationDetail: "Waterfront Park and Recreation Center",
					mediaLocationCity: "Weehawken",
					mediaLocationState: "NJ",
					mediaDate: "02/14/2018",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bd6tco2g0Ev/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "01/13/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bd6pLoIAaCv/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "01/13/2018",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BaQR21SgZjq/",
					mediaLocationDetail: "Frank Sinatra Drive",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "10/14/2017",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BY2KZ87AmWw/",
					mediaLocationDetail: "Pier C Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "09/09/2017",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BY2JDRjAfbj/",
					mediaLocationDetail: "Pier C Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "09/09/2017",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BWJrWKXArYc",
					mediaLocationDetail: "Weehawken Cove",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "07/04/2017",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BWJjIAegswK/",
					mediaLocationDetail: "Weehawken Cove",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "07/04/2017",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BVyhqtgAGVp/",
					mediaLocationDetail: "Sheraton Lincoln Harbor",
					mediaLocationCity: "Weehawken",
					mediaLocationState: "NJ",
					mediaDate: "06/25/2017",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BVyZdQsgTKR/",
					mediaLocationDetail: "Sheraton Lincoln Harbor",
					mediaLocationCity: "Weehawken",
					mediaLocationState: "NJ",
					mediaDate: "06/25/2017",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BUQlB9gglw3/",
					mediaLocationDetail: "Frank Sinatra Drive",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "05/18/2017",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BPwYv2bloS7/",
					mediaLocationDetail: "Boulevard East",
					mediaLocationCity: "West New York",
					mediaLocationState: "NJ",
					mediaDate: "01/26/2017",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BPwOH5jFMa4/",
					mediaLocationDetail: "Boulevard East",
					mediaLocationCity: "West New York",
					mediaLocationState: "NJ",
					mediaDate: "01/26/2017",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BHdpeCrhLX7/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "07/04/2016",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BHJGBssBisV/",
					mediaLocationDetail: "Stevens Institute of Technology",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "06/26/2016",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BHJEzWuBYsu/",
					mediaLocationDetail: "Stevens Institute of Technology",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "06/26/2016",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BHJDaDRBbpv/",
					mediaLocationDetail: "Stevens Institute of Technology",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "06/26/2016",
					mediaType: "Video",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BFIS0a6KTRT/",
					mediaLocationDetail: "Pier C Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "05/07/2016",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BBd-3E9KTes/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "02/06/2016",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/6EVaL9KTY4/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "08/06/2015",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/6EVL36KTYi/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "08/06/2015",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/4f0_dPKTSr/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "06/28/2015",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/4f0i_2qTR5/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "06/28/2015",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/4f0dlCqTRt/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "06/28/2015",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/3nT6blqTQ3/",
					mediaLocationDetail: "Battery Park City",
					mediaLocationCity: "New York",
					mediaLocationState: "NY",
					mediaDate: "06/07/2015",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				}
			],
			sr: [
				{
					mediaUrl: "https://www.instagram.com/p/Bq2KU8wF-v0/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "12/01/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bqmtk5lFhwG/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "11/25/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BpZX5MyFLyx/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "10/26/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BpZWtyClGPY/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "10/26/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bo_hhrvBjBk/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "10/16/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BnOPlflhnp0/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "09/02/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BmS4qS1hj5D/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "08/10/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BlxaVOfh0z6/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "07/28/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BlfeOGoBYEu/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "07/21/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BlFsx3fh00m/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "07/11/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BiEimrNB8OO/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "04/27/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BiCEKLMBskW/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "04/26/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bh81PuWhodQ/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "04/24/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BhWSPyeA9lU/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "04/09/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BgqiW5ugZAd/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "03/23/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bgi1NlVgpXJ/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "03/20/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bgi1G-eAfLC/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "03/20/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bfx-RrYg1Y3/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "03/01/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/Bfx98s2AYXe/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "03/01/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BfYK2sGgGEE/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "02/19/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BfV9S3CgcOq/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "02/18/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
				{
					mediaUrl: "https://www.instagram.com/p/BeIbywMgJpA/",
					mediaLocationDetail: "Maxwell Park",
					mediaLocationCity: "Hoboken",
					mediaLocationState: "NJ",
					mediaDate: "01/19/2018",
					mediaType: "Photo",
					showBlock: true,
					showMedia: true
				},
			]
		};
		
		$scope.pictureList = photosAndVideos[$scope.selectedView];

		$scope.$watch('selectedView', function(newValue, oldValue){
			if (typeof newValue != "undefined" && newValue !== oldValue) {
				$scope.pictureList = photosAndVideos[newValue];
				setTimeout(function(){
					window.instgrm.Embeds.process();
				}, 1000);				
			}
		});

		angular.forEach($scope.pictureList, function (value, key) {
			if ($scope.allCities.indexOf(value.mediaLocationCity) == -1) {
			  $scope.allCities.push(value.mediaLocationCity);
			}
		});
		
		//var isInitializing = true;
		//setTimeout(function() {
		//	isInitializing = false;
		//	$scope.selectedView = "fw";			
		//}, 500);		
  }]
  );