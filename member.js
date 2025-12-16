function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        scope: {
            member: '='
        }
    };
}

module.exports = skillsMember;

