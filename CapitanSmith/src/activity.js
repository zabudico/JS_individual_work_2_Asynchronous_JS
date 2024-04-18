//activity.js

/**
 * Function to get a random activity asynchronously.
 * @returns {Promise<string>} A promise that resolves with a random activity.
 * @throws {Error} If there is an error fetching the activity.
 */
export async function getRandomActivity() {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity/');
      if (!response.ok) {
        throw new Error('К сожалению, произошла ошибка'); // Network response was not ok
      }
      const data = await response.json();
      return data.activity;
    } catch (error) {
      throw new Error('К сожалению, произошла ошибка', error); // Error fetching activity
    }
  }
  
  /**
   * Updates the activity on the page by fetching a random activity asynchronously.
   * If an error occurs during fetching, it displays an error message on the page.
   * @returns {void}
   */
  export async function updateActivity() {
    try {
      const activity = await getRandomActivity();
      document.getElementById('activity').textContent = activity;
    } catch (error) {
      console.error('Error updating activity:', error);
      document.getElementById('activity').textContent = "К сожалению, произошла ошибка";
    }
  }
  