app.factory('HeroDetailsFactory', ['$http', function($http){
  console.log('Hero Details Factory loaded');

  var hero = { details: {} };

  function getHeroDetails(heroId) {
    $http({
        method: 'GET',
        url: '/heroDetails',
        params: { 
            heroId: heroId
        }
    }).then(function(response){
      console.log(response.data);
      hero.details = response.data;
    });
  }

  return {
    hero: hero,
    getHeroDetails: getHeroDetails
  }

}]);
