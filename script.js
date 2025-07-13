let user_score = 0;
let cpu_score = 0;
let round = 0;

function user_Input()
{
    let user = prompt("choise Rock Paper Scissors");
    if (user === null)
        return 0;

    user = user.toLowerCase();
    if (user ==="rock")
    {
        console.log("User: Rock");
        user = 3;
    }
    else if (user === "paper")
    {
        console.log("User: Paper");
        user = 2;
    }
    else if (user === "scissors")
    {
        console.log("User: Scissors");
        user = 1;
    }
    else
    {
        console.log(`User: ${user}`);
        return 0;
    }

    return user;
}

function cpu_choice()
{
    let cpu = Math.random();

    if (cpu < 0.33)
    {
        console.log("CPU: Scissors");
        cpu = 1;
    }
    else if (cpu < 0.66)
    {
        console.log("CPU: Paper");
        cpu = 2;
    }
    else
    {
        console.log("CPU: Rock");
        cpu = 3;
    }

    return cpu;
}


function main()
{
    if (user_score === 5 || cpu_score === 5)
    {
        if (user_score === 5)
            console.log("finally you Win😒");
        else
            console.log("you fail like it’s a talent🥶");
        return ;
    }

    console.log(`🚩round: ${round}`);
    console.log(`score: user(${user_score}) | cpu(${cpu_score})`);
    round++;

    let user = user_Input();
    if (user === 0)
    {
        console.log("please enter a correct Input");
        main();
    }
    let cpu = cpu_choice();

    if (user == cpu)
        console.log("draw, no point😶‍🌫️");
    else if (user > cpu)
    {
        console.log("Win, one point😉");
        user_score++;
    }
    else
    {
        console.log("lose, breaking new records in failure every time🤡");
        cpu_score++;
    }
    main();
}

let answer = main();