const parseArgs = () => {
    const args = process.argv.slice(2)
    let entries = [];
    for (let i = 0; i < args.length; i += 2) {
        const curr = args[i];
        const next = args[i + 1];
        entries.push(`${curr} is ${next}`);
    }
    console.log(entries.join(","))
};

parseArgs();