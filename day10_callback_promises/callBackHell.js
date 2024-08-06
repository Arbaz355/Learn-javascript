// wake up -> brush up -> face wash -> scrum meeting 

const myMorningRoutine = () => {
    console.log("wake Up");

    setTimeout(() => {
        console.log("Brush Up");

        setTimeout(() => {
            console.log("face wash");

            setTimeout(() => {
                console.log("scrum meeting")
            }, 1000)
        }, 1000)
    }, 1000)
};

myMorningRoutine();