function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 seconds completed");
        }, 2000);
    });
}

waitTwoSeconds().then((message) => {
    console.log(message);
});