let user_score = 0;
let cpu_score = 0;
let round = 0;

function user_Input(user)
{
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

function final_result(re_final, msg)
{
    re_final.textContent = msg;
}

function result(re, msg)
{
    re.textContent = msg;
}

function score(sc, msg)
{
    sc.textContent = msg;
}

function the_game(user_in)
{
    console.log(`🚩round: ${round}`);
    round++;

    let user = user_Input(user_in);
    let cpu = cpu_choice();
    
    let re = document.querySelector(".result");
    let final_re = document.querySelector(".final_result");
    let sc = document.querySelector(".score");
    let msg1;
    let msg2;
    if (user == cpu)
    {
        msg1 = "draw, no point😶‍🌫️";
        msg2 = `score: user(${user_score}) | cpu(${cpu_score})`;
        console.log(msg1);
        console.log(msg2);
        score(sc, msg2);
        result(re, msg1);
    }
    else if (user > cpu)
    {
        user_score++;
        console.log(`score: user(${user_score}) | cpu(${cpu_score})`);
        console.log("Win, one point😉");
        msg1 = "Win, one point😉";
        msg2 = `score: user(${user_score}) | cpu(${cpu_score})`;
        console.log(msg1);
        console.log(msg2);
        score(sc, msg2);
        result(re, msg1);
    }
    else
    {
        cpu_score++;
        console.log(`score: user(${user_score}) | cpu(${cpu_score})`);
        console.log("lose, breaking new records in failure every time🤡"); 
        msg1 = "lose, breaking new records in failure every time🤡";
        msg2 = `score: user(${user_score}) | cpu(${cpu_score})`;
        console.log(msg1);
        console.log(msg2);
        score(sc, msg2);
        result(re, msg1);
    }


    if (user_score !== 5 && cpu_score !== 5)
        console.log("--------------------------");
    if (user_score === 5 || cpu_score === 5)
    {
        if (user_score === 5)
        {
            console.log("finally you Win😒");
            msg1 = "finally you Win😒";
        }
        else
        {
            console.log("you fail like it’s a talent🥶");
            msg1 = "you fail like it’s a talent🥶";
        }
        console.log("--------------------------");
        final_result(final_re, msg1);
        user_score = 0;
        cpu_score = 0;
        round = 0;
        return ;
    }
}
        
function main()
{
    let rock_btn = document.querySelector(".Rock");
    let paper_btn = document.querySelector(".Paper");
    let scissors_btn = document.querySelector(".Scissors");

    rock_btn.addEventListener("click", () => the_game("rock"));
    paper_btn.addEventListener("click", () => the_game("paper"));
    scissors_btn.addEventListener("click", () => the_game("scissors"));
}

let answer = main();
