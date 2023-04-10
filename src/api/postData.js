export const postData = async (inputData) => {
  try {
    const res = await fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
    const data = await res.json();
    if (data !== null) {
      alert("Item added succesfully");
    }
  } catch (error) {
    console.log(error);
  }
};
