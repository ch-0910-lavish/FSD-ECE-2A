function fetchUserData() {
    return new Promise((resolve, reject) => {
        let success = false;
        if (success) {
            resolve({
                id: 1202,
                username: "Lavish",
            });
        }else{
            reject(new Error("Data not found"))
        }
    });
}
async function getUser(){
    try {
      const user = await fetchUserData();
      console.log(user);
    }catch (error) {
        console.log('Error: ${error.message}');
    }
}
getUser()