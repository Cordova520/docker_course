const connectToDatabase = () => {
    const dummyyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    return dummyyPromise;
};

export default connectToDatabase;