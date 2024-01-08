function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous operations, such as making an API request
    // For example, using fetch to make a simple GET request
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Resolve the promise with the retrieved data
        resolve(data);
      })
      .catch(error => {
        // Reject the promise with the encountered error
        reject(error);
      });
  });
}
