app.controller('HeroDetailsController', ['HeroDetailsFactory','$routeParams',
    function (HeroDetailsFactory, $routeParams) {
        console.log('Hero Details Controller loaded');
        console.log($routeParams);

        var self = this;

        self.hero = HeroDetailsFactory.hero;

        HeroDetailsFactory.getHeroDetails($routeParams.heroId);
    }]);
