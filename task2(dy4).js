function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 seconds completed");
        }, 2000);
    });
}

async function run() {
    let message = await waitTwoSeconds();
    console.log(message);
}

run();