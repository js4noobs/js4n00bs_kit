// Get the element to display the greeting
var elGreeting = document.getElementsByClassName('js-greeting')[0];

setGretting(elGreeting);

// Logic to set a greeting message in an element
function setGretting(element) {
    element.innerText = getGretting();

    function getGretting() {
        var hour = getHourOfTheDay();

        if (hour >= 5 && hour < 12) {
            return 'Good morning!';
        } else if (hour >= 12 && hour < 17) {
            return 'Good afternoon!';
        }

        return 'Good evening!';
    }

    function getHourOfTheDay() {
        // JS native method to get a single moment in time
        var day = new Date();

        return day.getHours();
    }
};
