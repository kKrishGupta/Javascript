let attempt = 0;

async function fakeApi() {
  attempt++;
  console.log("API Call Attempt:", attempt);
  if (attempt < 3) {
    throw new Error("API Failed");
  }
  return "✅ Data received successfully";
}

// async function retryApi(fn, retries =3) {
//   try{
//     return await fn();
//   }catch(error){
//     if(retries==0){
//       throw error;
//     }
//     console.log("Retrying...");
//     return retryApi(fn, retries - 1);
//   }
// }

async function retryApi(fn, retries = 3, wait = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }

    console.log(`Retrying in ${wait}ms...`);
    await delay(wait);

    return retryApi(fn, retries - 1, wait);
  }
}


retryApi(fakeApi, 3)
  .then(data => console.log(data))
  .catch(err => console.log("❌ Final Error:", err.message));
